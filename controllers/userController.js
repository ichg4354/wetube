import Video from "../models/Video";
import routes from "../routes";
import User from "../models/User";
import passport from "passport";
import Comment from "../models/Comment";
import { localsMiddleware } from "../middlewares";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ _id: -1 });
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const search = async (req, res) => {
  const term = req.query.term;
  let videos = [];
  try {
    videos = await Video.find({ title: { $regex: term, $options: "i" } });
  } catch (error) {
    console.log(error);
  }
  res.render("search", { pageTitle: "Search", videos, term });
};

export const users = (req, res) => res.render("users", { pageTitle: "Users" });

export const getEditProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });

export const postEditProfile = async (req, res) => {
  const {
    body: { name, email },
  } = req;
  const id = req.user.id;
  const file = req.file;
  try {
    await User.findByIdAndUpdate(id, {
      name: name,
      email: email,
      avatarUrl: req.file ? req.file.location : req.user.avatarUrl,
    });
    res.redirect(routes.userDetail(id));
  } catch (error) {
    console.log(error);
    res.redirect(routes.userDetail(id));
  }
};

export const getChangePassword = (req, res) => {
  res.render("changePassword", { pageTitle: "Change Password" });
};

export const postChangePassword = async (req, res) => {
  const {
    body: { oldPassword, newPassword, vertifyPassword },
  } = req;
  try {
    if (newPassword === vertifyPassword) {
      await req.user.changePassword(oldPassword, newPassword);
      res.redirect(routes.userDetail(req.user.id));
    } else {
      res.status("400");
      res.redirect(routes.changePassword(req.user.id));
    }
  } catch (error) {
    console.log(error);
    res.status("400");
    res.redirect(routes.changePassword(req.user.id));
  }
  // console.log(oldPassword, newPassword, vertifyPassword);
};

export const userDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id).populate("videos");
    console.log(user);
    res.render("userDetails", {
      pageTitle: "User Details",
      id: id,
      user: user,
    });
  } catch (e) {
    res.redirect(routes.home);
  }
};

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res, next) => {
  const body = req.body;
  const password1 = body.password;
  const password2 = body.password2;
  const name = body.name;
  const email = body.email;
  if (password1 !== password2) {
    res.redirect(routes.join);
  } else {
    try {
      const user = await User({
        name: name,
        email: email,
      });
      await User.register(user, password1);
      next();
    } catch (e) {
      console.log(e);
      res.redirect(routes.home);
    }
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Login" });
};
export const postLogin = passport.authenticate("local", {
  successRedirect: routes.home,
  failureRedirect: routes.login,
});

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.login);
};

export const postGithubLogin = (req, res) => {
  res.redirect(routes.home);
};

export const githubLoginCallback = async (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  const {
    _json: { name, id, avatar_url, email },
  } = profile;
  try {
    console.log(profile);
    const user = await User.findOne({ email: email });
    if (user) {
      user.githubId = id;
      user.save();
      return cb(null, user);
    } else {
      const newUser = await User.create({
        name: name,
        email: email,
        githubId: id,
        avatarUrl: avatar_url,
      });
      return cb(null, newUser);
    }
  } catch (e) {
    return cb(e);
  }
};

export const facebookLoginCallback = (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  const { id, username } = profile;
  console.log(id, username);
};

export const postFacebookLogin = (req, res) => {
  res.redirect(routes.home);
};

export const kakaoLoginCallback = async (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  const id = profile._json.id;
  const email = profile._json.kakao_account.email;
  const name = profile._json.properties.nickname;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      user.kakaoId = id;
      user.save();
      cb(null, user);
    } else {
      const newUser = await User.create({
        name: name,
        email: email,
        kakaoId: id,
      });
      cb(null, newUser);
    }
  } catch (error) {
    cb(error);
  }
};

export const postKakaoLogin = (req, res) => {
  res.redirect(routes.home);
};

export const postCommentAdd = async (req, res) => {
  const comment = req.body.comment;
  const videoId = req.params.id;
  const userId = req.user.id;
  try {
    const user = await User.findById(userId);
    const video = await Video.findById(videoId);
    const newComment = await Comment.create({
      text: comment,
      creator: userId,
    });
    video.comments.push(newComment.id);
    user.comments.push(newComment.id);
    video.save();
    user.save();
  } catch (e) {
    console.log(e);
  } finally {
    res.end();
  }
};

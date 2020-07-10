import Video from "../models/Video";
import routes from "../routes";
import User from "../models/User";
import passport from "passport";
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
  console.log(videos);
  res.render("search", { pageTitle: "Search", videos, term });
};

export const users = (req, res) => res.render("users", { pageTitle: "Users" });

export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });

export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });

export const userDetails = (req, res) =>
  res.render("userDetails", { pageTitle: "User Details" });

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
      res.redirect(routes.home)
    }
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Login" });
};
export const postLogin = passport.authenticate('local', {
  successRedirect: routes.home,
  failureRedirect:routes.login
})

export const logout = (req, res) => {
  req.logout()
  res.redirect(routes.login)
};


export const githubLoginCallback = (accessToken, refreshToken, profile, cb) => {
  console.log(accessToken, refreshToken, profile, cb)
}
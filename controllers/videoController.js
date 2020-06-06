import routes from "../routes";
import Video from '../models/Video'

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
  const body = req.body
  const password1 = body.password;
  const password2 = body.password2;
  if (password1 == password2) {
    res.redirect(routes.home)
  } else {
    res.status(400)
    res.render('join', {pageTitle: 'Join'})
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Login" });
}
export const postLogin = (req, res) => {
  res.redirect(routes.home);
}

export const logout = (req, res) => {
  res.redirect(routes.home)
}
  

export const videos = (req, res) =>
  res.render("videos", { pageTitle: "Videos" });

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = async(req, res) => {
  const body = {
    filePath: req.file.path,
    title: req.body.title,
    description: req.body.description
  }
  const newVideo = await Video.create({
    fileUrl: body.filePath,
    title: body.title,
    description:body.description
  })
  console.log(newVideo)
  res.redirect(routes.videoDetail(newVideo.id))
}

export const video_detail = (req, res) =>
  res.render("videoDetails", { pageTitle: "Video Details" });

export const edit_video = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const del_video = (req, res) =>
  res.render("delVideo", { pageTitle: "Del Video" });

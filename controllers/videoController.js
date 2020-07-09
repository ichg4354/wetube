import routes from "../routes";
import Video from "../models/Video";

import { mongoose } from "mongoose";



export const videos = (req, res) =>
  res.render("videos", { pageTitle: "Videos" });

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = async (req, res) => {
  const body = {
    filePath: req.file.path,
    title: req.body.title,
    description: req.body.description,
  };
  const newVideo = await Video.create({
    fileUrl: body.filePath,
    title: body.title,
    description: body.description,
  });
  console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  const id = req.params.id;
  try {
    const video = await Video.findById(id);
    console.log(video);
    res.render("videoDetails", { pageTitle: video.title, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getEditVideo = async (req, res) => {
  try {
    const id = req.params.id;
    const video = await Video.findById(id);
    res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
  } catch (error) {
    res.redirect(routes.home)
  }
};

export const postEditVideo = async(req, res) => {
  try {
    const id = req.params.id;
    const title = req.body.title
    const description = req.body.description
    await Video.findOneAndUpdate({ _id:id }, { title, description })
    res.redirect(routes.videoDetail(id))
  } catch (error) {
    res.redirect(routes.home)
  }
  res.render("editVideo", { pageTitle: "Edit Video" });
};

export const delVideo = async(req, res) => {
  const id = req.params.id;
  try {
    await Video.findByIdAndDelete({_id:id})
    res.redirect(routes.home)
  } catch (id) {
    res.redirect(routes.home)
  }
}

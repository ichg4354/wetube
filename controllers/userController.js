import Video from "../models/Video";

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
  console.log(videos)
  res.render("search", { pageTitle: "Search", videos, term });
};

export const users = (req, res) => res.render("users", { pageTitle: "Users" });

export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });

export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });

export const userDetails = (req, res) =>
  res.render("userDetails", { pageTitle: "User Details" });

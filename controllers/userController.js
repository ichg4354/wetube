import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const search = (req, res) => {
  const term = req.query.term;
  res.render("search", {
    pageTitle: "Search",
    term: term,
    videoList: videoList,
  });
};

export const users = (req, res) => res.render("users", { pageTitle: "Users" });

export const edit_profile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });

export const change_password = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });

export const user_details = (req, res) =>
  res.render("userDetails", { pageTitle: "User Details" });

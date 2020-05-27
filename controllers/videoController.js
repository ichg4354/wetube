export const join = (req, res) => res.render('join', {pageTitle : "Join"});
export const login = (req, res) => res.render('login', {pageTitle : "Login"});
export const logout = (req, res) => res.render('logout', {pageTitle : "Logout"});
export const videos = (req, res) => res.render('videos', {pageTitle : "Videos"})
export const upload = (req, res) => res.render('upload', {pageTitle : "Upload"})
export const video_detail = (req, res) => res.render('videoDetails', { pageTitle: "Video Details" });
export const edit_video = (req, res) => res.render('editVideo', { pageTitle: "Edit Video" });
export const del_video = (req, res) => res.render('delVideo', { pageTitle: "Del Video" });
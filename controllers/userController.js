export const home = (req, res) => res.render('home', {pageTitle: "Home"});
export const search = (req, res) => {
    const term = req.query.term;
    res.render('search', { pageTitle: "Search", term: term})
}
export const users = (req, res) => res.render('users', { pageTitle: "Users" });
export const edit_profile = (req, res) => res.render('editProfile', {pageTitle: "Edit Profile"})
export const change_password = (req, res) => res.render('changePassword', {pageTitle: "Change Password"})
export const user_details = (req, res) => res.render('userDetails', {pageTitle: "User Details"})

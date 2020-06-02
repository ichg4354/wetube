// HOME
const HOME = '/';
const SEARCH = '/search';
const JOIN = '/join';
const LOGIN = '/login';
const LOGOUT = '/logout';


// USERS
const USERS = '/users';
const EDIT_PROFILE = '/:id/edit-profile';
const CHANGE_PASSWORD = '/:id/change-password';
const USER_DETAILS = '/:id';

// VIDEOS
const VIDEOS = '/videos';
const UPLOAD = '/upload';
const VIDEO_DETAIL = '/:id';
const EDIT_VIDEO = '/:id/edit';
const DEL_VIDEO = '/:id/delete';


const routes = {
    home: HOME,
    join: JOIN,
    login : LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: (id) => {
        if(id) {
            return `/users/${id}`
        } else {
            return USER_DETAILS
        }
    },
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: (id) => {
        if (id) {
            return `/videos/${id}`
        } else {
            return VIDEO_DETAIL
        }
    },
    editVideo: EDIT_VIDEO,
    delVideo: DEL_VIDEO,
}
    
export default routes
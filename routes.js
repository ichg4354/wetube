// HOME
const HOME = '/';
const JOIN = '/join';
const LOGIN = '/login';
const LOGOUT = '/logout';
const SEARCH = '/search';


// USERS
const USERS = '/users';
const USER_DETAILS = '/user-details';
const EDIT_PROFILE = '/edit-profile';
const CHANGE_PASSWORD = '/change-password';

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
    userDetail: USER_DETAILS,
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: VIDEO_DETAIL,
    editVideo: EDIT_VIDEO,
    delVideo: DEL_VIDEO,
}
    
export default routes
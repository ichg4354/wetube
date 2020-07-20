// HOME
const HOME = "/";
const SEARCH = "/search";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

// USERS
const USERS = "/users";
const EDIT_PROFILE = "/:id/edit-profile";
const CHANGE_PASSWORD = "/:id/change-password";
const USER_DETAILS = "/:id";
const ME = "/me";

// VIDEOS
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DEL_VIDEO = "/:id/delete";

// GITHUB
const GITHUB_LOGIN = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

// FACEBOOK
const FACEBOOK_LOGIN = "/auth/facebook";
const FACEBOOK_CALLBACK = "/auth/facebook/callback";

// KAKAO

const KAKAO_LOGIN = "/auth/kakao";
const KAKAO_CALLBACK = "/auth/kakao/callback";

// API

const API = '/api';
const REGISTER_VIEW = "/:id/view"
const COMMENT_ADD = "/:id/comment"

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: (id) => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_DETAILS;
    }
  },
  editProfile: (id) => {
    if (id) {
      return `/users/${id}/edit-profile`;
    } else {
      return EDIT_PROFILE;
    }
  },
  changePassword: (id) => {
    if (id) {
      return `/users/${id}/change-password`;
    } else {
      return CHANGE_PASSWORD;
    }
  },
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: (id) => {
    if (id) {
      return `/videos/${id}`;
    } else {
      return VIDEO_DETAIL;
    }
  },
  editVideo: (id) => {
    if (id) {
      return `/videos/${id}/edit`;
    } else {
      return EDIT_VIDEO;
    }
  },
  delVideo: (id) => {
    if (id) {
      return `/videos/${id}/delete`;
    } else {
      return DEL_VIDEO;
    }
  },
  gitHubLogin: GITHUB_LOGIN,
  gitHubCallback: GITHUB_CALLBACK,
  me: ME,
  facebookLogin: FACEBOOK_LOGIN,
  faebookCallback: FACEBOOK_CALLBACK,
  kakaoLogin: KAKAO_LOGIN,
  kakaoCallback: KAKAO_CALLBACK,
  api: API,
  registerView: REGISTER_VIEW,
  commentAdd: COMMENT_ADD
};

export default routes;

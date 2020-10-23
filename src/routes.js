//global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//users
const USERS = "/users";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const USER_DETAIL = "/:id";
const ME = "/me";

//videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const DELETE_VIDEO = "/:id/delete";
const EDIT_VIDEO = "/:id/edit";
const VIDEO_DETAIL = "/:id";

//github
const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

//API
const API = "/api";
const REGISTER_VIEW = "/:id/view";

//comment
const ADD_COMMNET = "/:id/comment";

const routes = {
  //API
  api: API,
  registerView: REGISTER_VIEW,

  //comment
  addComment: ADD_COMMNET,

  //
  me: ME,

  //github
  github: GITHUB,
  githubCallback: GITHUB_CALLBACK,

  //global
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,

  //users
  users: USERS,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  userDetail: (id) => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_DETAIL;
    }
  },

  //videos
  videos: VIDEOS,
  upload: UPLOAD,

  deleteVideo: (id) => {
    if (id) {
      return routes.videos + `/${id}/delete`;
    } else {
      return DELETE_VIDEO;
    }
  },

  editVideo: (id) => {
    if (id) {
      return `/videos/${id}/edit`;
    } else {
      return EDIT_VIDEO;
    }
  },

  videoDetail: (id) => {
    if (id) {
      return `/videos/${id}`;
    } else {
      return VIDEO_DETAIL;
    }
  },
};

export default routes;

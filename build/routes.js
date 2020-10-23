"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
//global
var HOME = "/";
var JOIN = "/join";
var LOGIN = "/login";
var LOGOUT = "/logout";
var SEARCH = "/search"; //users

var USERS = "/users";
var EDIT_PROFILE = "/edit-profile";
var CHANGE_PASSWORD = "/change-password";
var USER_DETAIL = "/:id";
var ME = "/me"; //videos

var VIDEOS = "/videos";
var UPLOAD = "/upload";
var DELETE_VIDEO = "/:id/delete";
var EDIT_VIDEO = "/:id/edit";
var VIDEO_DETAIL = "/:id"; //github

var GITHUB = "/auth/github";
var GITHUB_CALLBACK = "/auth/github/callback"; //API

var API = "/api";
var REGISTER_VIEW = "/:id/view"; //comment

var ADD_COMMNET = "/:id/comment";
var routes = {
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
  userDetail: function userDetail(id) {
    if (id) {
      return "/users/".concat(id);
    } else {
      return USER_DETAIL;
    }
  },
  //videos
  videos: VIDEOS,
  upload: UPLOAD,
  deleteVideo: function deleteVideo(id) {
    if (id) {
      return routes.videos + "/".concat(id, "/delete");
    } else {
      return DELETE_VIDEO;
    }
  },
  editVideo: function editVideo(id) {
    if (id) {
      return "/videos/".concat(id, "/edit");
    } else {
      return EDIT_VIDEO;
    }
  },
  videoDetail: function videoDetail(id) {
    if (id) {
      return "/videos/".concat(id);
    } else {
      return VIDEO_DETAIL;
    }
  }
};
var _default = routes;
exports["default"] = _default;
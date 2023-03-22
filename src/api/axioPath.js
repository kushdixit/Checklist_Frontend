import axios from "axios";
import { showAppLoader, hideAppLoader } from "redux/actions/loader";
import { USER_INITIATE } from "redux/actions/action_types";
import { store } from "redux/index";

const axioPath = axios.create({
  // baseURL: process.env.PUBLIC_API_URL,
  // baseURL: "https://checklist-dev.thewitslab.com/api/",
  // baseURL: "http://112.196.2.202:9005/api/",
  // baseURL: "http://112.196.2.202:9005/api/",
  baseURL: "http://112.196.2.202:8080/api/",
  headers: {
    "x-checklist-application-id": "checklist-ui-application-id",
    "Content-Type": "application/json",
  },
});

axioPath.interceptors.request.use(
  function (config) {
    // spinning start to show
    if (!config.hideLoader) {
      store.dispatch(showAppLoader());
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axioPath.interceptors.response.use(
  function (response) {
    // spinning hide
    store.dispatch(hideAppLoader());
    return response;
  },
  function (error) {
    if (error.request.status === 401) {
      window.localStorage.removeItem("userInfo");
      store.dispatch({ type: USER_INITIATE });
    }
    store.dispatch(hideAppLoader());
    return Promise.reject(error);
  }
);

export default axioPath;

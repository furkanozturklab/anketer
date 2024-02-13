import axios from "axios";
import { setCookie } from "Tools/Gears";


const api_key = "ac6915da8f697dffcdadfdb083de8852";
const api_url = "http://127.1.2.3/api";

export const loadSurver = async (setJsonData, setPostVoteData) => {
  const postData = {
    post_token: api_key,
    post_apiName: "anketerApp",
    post_action: "SURVEY_DAY",
    post_status: true,
    post_react: "true",
  };
  await new Promise((resolve) => setTimeout(resolve, 500));
  axios
    .post(api_url, postData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((response) => {
      setJsonData(response.data);
      if (response.data["bypass"] === true) {
        setPostVoteData(true);
      } else {
        setPostVoteData(false);
      }
    })
    .catch((error) => {
      console.error("İstek hatası:", error);
    });
};

export const voteSend = async (id, text, vote_col, setJsonData) => {
  const postData = {
    post_token: api_key,
    post_apiName: "anketerApp",
    post_action: "SURVEY_VOTE",
    post_status: true,
    post_id: id,
    post_voteCol: vote_col.replace("_text", "_val"),
    post_react: "true",
  };

  axios
    .post(api_url, postData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((response) => {
      console.log(response.data);
      setJsonData(response.data);
    })
    .catch((error) => {
      console.error("İstek hatası:", error);
    });

  let cookieValue = id + "½" + text;
  const date = new Date();
  date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
  const expires = date;
  await setCookie("voteCookie", cookieValue, expires);
};

export const oldLoadSurver = async (setOldJsonData) => {
  const postData = {
    post_token: api_key,
    post_apiName: "anketerApp",
    post_action: "SURVEY_OLD",
    post_react: "true",
  };

  await new Promise((resolve) => setTimeout(resolve, 3500));
  axios
    .post(api_url, postData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((response) => {
      setOldJsonData(response.data);
    })
    .catch((error) => {
      console.error("İstek hatası:", error);
    });
};

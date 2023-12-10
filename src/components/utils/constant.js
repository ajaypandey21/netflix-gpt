export const logo =
  "https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const netflix_logo =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const API_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+process.env.REACT_APP_IMBD_KEY,
  },
};
export const IMG_URL = "https://image.tmdb.org/t/p/w500";

export const language_const = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "hin",
    name: "Hindi",
  },
  {
    identifier: "es",
    name: "Spanish",
  },
  {
    identifier: "chi",
    name: "Chinese",
  },
  {
    identifier: "russ",
    name: "Russian",
  },
];

//  export const OpenAI_Key = "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";
 export const OpenAI_Key = process.env.OpenAI_Key

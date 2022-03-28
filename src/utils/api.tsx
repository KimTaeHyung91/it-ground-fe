import axios, { Method } from "axios";

const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;

// axios util 추가
const rest = (method: Method) => {
  return async (url: string, { body = {}, header = {}, token = "" } = {}) => {
    try {
      let response;
      if (method === "GET") {
        response = await axios.get(`${SERVER_API_URL}${url}`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            ...header,
          },
        });
      } else {
        response = await axios(`${SERVER_API_URL}${url}`, {
          method: method,
          data: body,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            ...header,
          },
        });
      }
      const { data } = response;
      return data;
    } catch (err) {
      const { response }: any = err;

      // network 오류, 이외 경우는 모르지만, response 데이터가 없는 경우에 해당
      if (!response) {
        return { code: -1, data: {} };
      }
      // 403: token이 인증되지 않을경우 로그인 화면으로 네비게이팅
      if (response.status === 403) {
        //
      }
      return response;
    }
  };
};

class Api {
  get;
  post;
  put;
  delete;
  constructor() {
    this.get = rest("GET");
    this.post = rest("POST");
    this.put = rest("PUT");
    this.delete = rest("DELETE");
  }
}

const api: Api = new Api();

export default api;

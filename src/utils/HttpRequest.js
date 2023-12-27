
import axios from 'axios';

const BASE_URL = "http://localhost:5000/";

export default function httpRequest(url, method, data) {
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: BASE_URL + url,
      data: data
    })
      .then(function (response) {
        console.log("RequestSuccess",response)
        resolve(response.data);
      })
      .catch(function (error) {
        console.log("RequestError",error)
        reject(error);
      });
  });
}

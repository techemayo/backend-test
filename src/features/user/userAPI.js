import axios from "axios";

export async function getUser() {
    const options = {
        method: "GET",
        url: `http://localhost:8000/userinfo`,
      };
      return axios
      .request(options)
      .then(function (response) {
        return response.data.results[0]; 
      })
      .catch(function (error) {
        console.log(error);
      });
}

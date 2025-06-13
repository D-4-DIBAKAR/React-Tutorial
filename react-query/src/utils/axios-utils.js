import axios from "axios";

export const client = axios.create({
     baseURL: "http://localhost:4000",
});//axiosInstance

export const request = ({ ...options }) => {
     // client.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem("token")}`;
     client.defaults.headers.common.Authorization = `Bearer token`;
     const onSuccess = (response) => response;
     const onError = (error) => {
          //Optionally Catch error additionally logging errors Here
          Promise.reject(error)
          return error;
     };
     return client(options).then(onSuccess).catch(onError);
}
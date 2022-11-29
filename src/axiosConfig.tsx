/*
// Import the functions that control the loading modal
import { PresentLoadingModal, DismissLoadingModal } from "./components/LoadingModal/LoadingModal";
// First we need to import axios.js
import axios from "axios";
// Next we make an 'instance' of it
const instance = axios.create({
    // .. where we make our configurations
    baseURL: "http://20.224.155.239:443/%22,%7D"});
    // Where you would set stuff like your 'Authorization' header, etc ...
    instance.defaults.headers.common["Accept"] = "applicatio/json";
    instance.defaults.headers.post["Content-Type"] = "application/json";
    instance.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("auth_token");
    // Also add/ configure interceptors && all the other cool stuff
    // Add a request interceptor
    instance.interceptors.request.use(
        function (config) {
            // Do something before request is sent        
            // Open the loading modal so the user has feedback that something is happening        
            PresentLoadingModal(); return config;
        },
        function (error) {
            // Do something with request error        
            return Promise.reject(error);
        },);
    // Add a response interceptor
    instance.interceptors.response.use(
        function (response) {
            // Any status code that lie within the range of 2xx cause this function to trigger  
            // Close the loading modal again, regardless of response code   
            DismissLoadingModal();
            // Do something with response data      
            return response;
        }, function (error) {
            // Any status codes that falls outside the range of 2xx cause this function to trigger        
            // Close the loading modal again, regardless of response code        
            DismissLoadingModal();
            // Do something with response error        
            return Promise.reject(error);
        },);

export default instance; */
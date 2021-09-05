import axios from "axios";

//THE API (cloud function) URL From run ">firebase emulators:start"

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-with-react-9eb74/us-central1/api',
})

export default instance;


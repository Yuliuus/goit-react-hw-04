import axios from "axios";

// axios.defaults.baseURL = "https://api.unsplash.com/";

// const AccessKey = "2v-3VDmPRDhk6q-mtAinGvXCqV_J9cy1VgSnNGEjX7s";

export const fetchPictures = async () => {
    const responce = await axios.get("https://api.unsplash.com/photos/?client_id=2v-3VDmPRDhk6q-mtAinGvXCqV_J9cy1VgSnNGEjX7s");
    return responce.data;
}
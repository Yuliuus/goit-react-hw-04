import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

const AccessKey = "2v-3VDmPRDhk6q-mtAinGvXCqV_J9cy1VgSnNGEjX7s";
axios.defaults.headers.common["Authorization"] = `Client-ID ${AccessKey}`;
axios.defaults.params = {
    orientation: "landscape",
    per_page: 16,
}

export const fetchPictures = async (query, page) => {
    const responce = await axios.get(`/search/photos/`,
        {
            params: {
                query: query,
                page: page,
            },
        }
    );
    return responce.data;
}
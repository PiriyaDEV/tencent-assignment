import axios from "axios";
import NewsModel from "../models/News";

const getNews = async (category) => {
  try {
    let endpoint = "http://localhost:3001/news";

    if (category) {
      endpoint += "?category=" + category;
    }

    const response = await axios.get(endpoint);

    return await Promise.all(
      response.data.map((item) => NewsModel.create(item))
    );
  } catch (error) {
    console.error(error);
  }
};

const getNewsById = async (id) => {
  try {
    let endpoint = "http://localhost:3001/news?id=" + id;

    const response = await axios.get(endpoint);

    return await NewsModel.create(response.data[0]);
  } catch (error) {
    console.error(error);
  }
};

export { getNews, getNewsById };

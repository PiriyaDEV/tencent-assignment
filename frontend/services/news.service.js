import axios from "axios";
import NewsModel from "../models/News";

const getNews = async (category, random = "no") => {
  try {
    let endpoint = "http://localhost:3001/news";

    if (category) {
      endpoint += "?category=" + category;
    }

    const response = await axios.get(endpoint);

    const newsItems = await Promise.all(
      response.data.map((item) => NewsModel.create(item))
    );

    if (random === "random") {
      // Randomly sort the news items
      const randomNewsItems = newsItems.sort(() => Math.random() - 0.5);

      // Return the first 8 items (or fewer if there are not enough)
      return randomNewsItems.slice(0, 8);
    } else {
      return newsItems;
    }
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

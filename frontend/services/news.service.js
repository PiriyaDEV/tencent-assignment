import axios from "axios";
import qs from "qs";
import NewsModel from "../models/News";

const api_url = "http://localhost:3001/news";

const getNews = async ({
  search,
  filter,
  pagination,
  sort,
  dateRange,
  random = false,
} = {}) => {
  try {
    const query = qs.stringify(
      {
        q: search,
        ...filter,
        _page: pagination?.["page"],
        _limit: pagination?.["limit"],
        _sort: sort?.["field"],
        _order: sort?.["order"],
        date_gte: dateRange?.["start"],
        date_lte: dateRange?.["end"],
      },
      {
        encodeValuesOnly: true,
      }
    );

    let endpoint = api_url;

    if (query) endpoint += "?" + query;

    const response = await axios.get(endpoint);

    const totalCount = response.headers["x-total-count"];

    const newsItems = await Promise.all(
      response.data.map((item) => NewsModel.create(item))
    );

    if (random) {
      // Randomly sort the news items
      const randomNewsItems = newsItems.sort(() => Math.random() - 0.5);

      // Return the first 8 items (or fewer if there are not enough)
      return [totalCount, randomNewsItems.slice(0, 8)];
    } else {
      return [totalCount, newsItems];
    }
  } catch (error) {
    console.error(error);
    return [0, []];
  }
};

const getNewsById = async (id) => {
  try {
    const query = qs.stringify(
      {
        id: id,
      },
      {
        encodeValuesOnly: true,
      }
    );

    let endpoint = api_url;
    if (query) endpoint += "?" + query;

    const response = await axios.get(endpoint);

    return await NewsModel.create(response.data[0]);
  } catch (error) {
    console.error(error);
    return {};
  }
};

export { getNews, getNewsById };

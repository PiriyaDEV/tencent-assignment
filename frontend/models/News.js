// eslint-disable-next-line
import { getDate } from "../utils/function";

export default new (class NewsModel {
  async create(data) {
    const model = {};

    model.id = data?.id;
    model.author = data?.author;
    model.content = data?.content;
    model.datetime = getDate(data?.date, data?.time);
    model.imageUrl = data && `https://picsum.photos/seed/${data?.id}/1000/270`;
    model.readMoreUrl = data?.readMoreUrl;
    model.title = data?.title;
    model.views = data?.views;
    model.category = data?.category;

    return model;
  }

  getHighlighted(newsData = [], start = 0, end) {
    const latestDate = Math.max(
      ...newsData.map((news) => new Date(`${news.date} ${news.time}`).getTime())
    );
    const mostViews = Math.max(...newsData.map((news) => news.views));

    const highlightNews = newsData.filter((news) => {
      const newsDate = new Date(`${news.date} ${news.time}`).getTime();
      return newsDate !== latestDate && news.views !== mostViews;
    });

    return highlightNews.slice(start, end);
  }

  getMostViewed(news = [], start = 0, end) {
    return news
      .sort((newsA, newsB) => {
        let viewResult;

        // Get the views values
        const viewsA = newsA["views"];
        const viewsB = newsB["views"];

        viewResult = viewsB - viewsA;

        return viewResult;
      })
      .slice(start, end);
  }

  getLatestNews(news = [], start = 0, end) {
    return news
      .sort((newsA, newsB) => {
        let dateResult;

        // Get the datetime values
        const datetimeA = newsA["datetime"];
        const datetimeB = newsB["datetime"];

        dateResult = datetimeB - datetimeA;

        return dateResult;
      })
      .slice(start, end);
  }
})();

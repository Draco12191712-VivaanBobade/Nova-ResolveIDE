import { UIIcons } from "../../../../assets/icons/ui";

interface NewsArticle {
  id: string;
  title: string;
  publishedAt: string;
}

export default function NewsWidget() {
  /*
   * TODO:
   * Replace with:
   * const articles = await NewsProvider.getLatestNews();
   */
  const articles: NewsArticle[] = [];

  const handleNews = () => {
    // TODO:
    // router.navigate("/news");
  };

  if (articles.length === 0) {
    return (
      <div className="newsWidget">
        <div className="newsWidget__empty">
          <img
            src={UIIcons.Announcements}
            alt=""
            className="newsWidget__icon"
            draggable={false}
          />

          <h3 className="newsWidget__title">No News Yet</h3>

          <p className="newsWidget__description">
            News about Nova Resolve, extensions, features, and community
            announcements will appear here.
          </p>

          <button
            type="button"
            className="newsWidget__button"
            onClick={handleNews}
          >
            View News
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="newsWidget">
      {/* News articles will be rendered here */}
    </div>
  );
}

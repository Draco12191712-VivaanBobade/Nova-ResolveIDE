import { UIIcons } from "../../../../assets/icons/ui";

interface FeaturedExtension {
  id: string;
  name: string;
  version: string;
}

export default function FeaturedExtensionsWidget() {
  /*
   * TODO:
   * Replace with:
   * const extensions = await ExtensionProvider.getFeaturedExtensions();
   */
  const extensions: FeaturedExtension[] = [];

  const handleMarketplace = () => {
    // TODO:
    // router.navigate("/marketplace");
  };

  if (extensions.length === 0) {
    return (
      <div className="featuredExtensions">
        <div className="featuredExtensions__empty">
          <img
            src={UIIcons.Extensions}
            alt=""
            className="featuredExtensions__icon"
            draggable={false}
          />

          <h3 className="featuredExtensions__title">No Featured Extensions</h3>

          <p className="featuredExtensions__description">
            Featured extensions from the Nova Resolve Marketplace will appear
            here once they're available.
          </p>

          <button
            type="button"
            className="featuredExtensions__button"
            onClick={handleMarketplace}
          >
            Browse Marketplace
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="featuredExtensions">
      {/* Featured extension cards will be rendered here */}
    </div>
  );
}

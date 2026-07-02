import { UIIcons } from "../../../../assets/icons/ui";

interface ExtensionUpdate {
  id: string;
  name: string;
  version: string;
}

export default function ExtensionUpdatesWidget() {
  /*
   * TODO:
   * Replace with:
   * const updates = await ExtensionProvider.getAvailableUpdates();
   */
  const updates: ExtensionUpdate[] = [];

  const handleMarketplace = () => {
    // TODO:
    // router.navigate("/marketplace");
  };

  if (updates.length === 0) {
    return (
      <div className="extensionUpdates">
        <div className="extensionUpdates__empty">
          <img
            src={UIIcons.Extensions}
            alt=""
            className="extensionUpdates__icon"
            draggable={false}
          />

          <h3 className="extensionUpdates__title">No Extension Updates</h3>

          <p className="extensionUpdates__description">
            All installed extensions are up to date. New updates will appear
            here automatically.
          </p>

          <button
            type="button"
            className="extensionUpdates__button"
            onClick={handleMarketplace}
          >
            Open Marketplace
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="extensionUpdates">
      {/* Extension update cards will be rendered here */}
    </div>
  );
}

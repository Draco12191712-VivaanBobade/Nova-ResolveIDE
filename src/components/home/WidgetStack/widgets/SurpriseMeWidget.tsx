import { UIIcons } from "../../../../assets/icons/ui";

interface SupportedGame {
  id: string;
  name: string;
}

export default function SurpriseMeWidget() {
  /*
   * TODO:
   * Replace with:
   * const games = await GameProvider.getSupportedGames();
   */
  const games: SupportedGame[] = [];

  const handleBrowseGames = () => {
    // TODO:
    // router.navigate("/games");
  };

  if (games.length === 0) {
    return (
      <div className="surpriseMeWidget">
        <div className="surpriseMeWidget__empty">
          <img
            src={UIIcons.Effects}
            alt=""
            className="surpriseMeWidget__icon"
            draggable={false}
          />

          <h3 className="surpriseMeWidget__title">No Supported Games Yet</h3>

          <p className="surpriseMeWidget__description">
            Surprise Me will randomly suggest a supported game to start creating
            with once game support becomes available.
          </p>

          <button
            type="button"
            className="surpriseMeWidget__button"
            onClick={handleBrowseGames}
          >
            Browse Games
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="surpriseMeWidget">
      {/* Random game recommendation will be rendered here */}
    </div>
  );
}

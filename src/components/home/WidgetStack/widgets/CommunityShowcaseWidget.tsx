import { GameIcons } from "../../../../assets/icons/games";

export default function CommunityShowcaseWidget() {
  return (
    <div className="communityShowcase">
      <div className="communityShowcase__featured">
        <img
          src={GameIcons.MinecraftBedrock}
          alt="Minecraft Bedrock"
          className="communityShowcase__gameIcon"
          draggable={false}
        />

        <div className="communityShowcase__info">
          <span className="communityShowcase__badge">Trending</span>

          <h3 className="communityShowcase__title">Better Animations</h3>

          <p className="communityShowcase__creator">by Nova Studios</p>
        </div>
      </div>

      <div className="communityShowcase__stats">
        <div className="communityShowcase__stat">4.8k</div>

        <div className="communityShowcase__stat">61k</div>

        <div className="communityShowcase__stat">Minecraft Bedrock</div>
      </div>

      <button type="button" className="communityShowcase__button">
        View Project
      </button>
    </div>
  );
}

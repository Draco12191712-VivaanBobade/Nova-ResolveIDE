import { SystemIcons } from "../../../../assets/icons/system";

interface CommunityProject {
  id: string;
  name: string;
}

export default function CommunityShowcaseWidget() {
  /*
   * TODO:
   * Replace with:
   * const projects = await CommunityProvider.getFeaturedProjects();
   */
  const projects: CommunityProject[] = [];

  if (projects.length === 0) {
    return (
      <div className="communityShowcase">
        <div className="communityShowcase__empty">
          <img
            src={SystemIcons.User}
            alt=""
            className="communityShowcase__icon"
            draggable={false}
          />

          <h3 className="communityShowcase__title">No Featured Projects</h3>

          <p className="communityShowcase__description">
            Community projects will appear here once creators begin sharing them
            with Nova Resolve.
          </p>

          <button type="button" className="communityShowcase__button">
            Explore Community
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="communityShowcase">
      {/* Featured project cards will be rendered here */}
    </div>
  );
}

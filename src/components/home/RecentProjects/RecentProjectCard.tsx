import { GameIcons } from "../../../assets/images/icons/games";

interface RecentProject {
  id: string;
  name: string;
  gameId: keyof typeof GameIcons;
  path: string;
  lastOpened: string;
}

interface Props {
  project: RecentProject;
}

const gameNames: Record<keyof typeof GameIcons, string> = {
  minecraftbedrock: "Minecraft Bedrock",
  minecraftjava: "Minecraft Java",
  terraria: "Terraria",
  arksurvivalascended: "ARK: Survival Ascended",
  stardewvalley: "Stardew Valley",
  thesims4: "The Sims 4",
  wowmidnight: "World of Warcraft: Midnight",
};

export default function RecentProjectCard({ project }: Props) {
  const gameIcon = GameIcons[project.gameId];
  const gameName = gameNames[project.gameId];

  const handleOpen = () => {
    // TODO: Open the project
    console.log(`Opening "${project.name}"`);
  };

  return (
    <button type="button" className="recentProjects__card" onClick={handleOpen}>
      <img
        className="recentProjects__gameIcon"
        src={gameIcon}
        alt={gameName}
        draggable={false}
      />

      <div className="recentProjects__info">
        <div className="recentProjects__name">{project.name}</div>

        <div className="recentProjects__game">{gameName}</div>

        <div className="recentProjects__path">{project.path}</div>
      </div>

      <div className="recentProjects__lastOpened">{project.lastOpened}</div>
    </button>
  );
}

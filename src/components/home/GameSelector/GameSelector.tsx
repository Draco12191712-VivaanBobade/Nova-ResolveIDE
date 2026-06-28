import "./GameSelector.css";

import GameCard from "./GameCard";

import minecraftIcon from "../../../assets/images/icons/games/minecraft-bedrock.svg";
// import terrariaIcon from "../../../assets/images/icons/games/terraria.svg";
const games = [
  {
    id: "minecraft-bedrock",
    name: "Minecraft Bedrock",
    description:
      "Create add-ons, resource packs, skin packs, scripts, and worlds.",
    icon: minecraftIcon,
    accentColor: "#101010",
    installed: true,
    supportedProjectTypes: [
      "Behavior Pack",
      "Resource Pack",
      "Skin Pack",
      "World Template",
    ],
  },

  // i will uncomment later once i add support for these games

  // {
  //     id: "terraria",
  //     name: "Terraria",
  //     description: "Build powerful mods using tModLoader.",
  //     icon: terrariaIcon,
  //     accentColor: "#4C8B4F",
  //     installed: false,
  //     supportedProjectTypes: [
  //         "Mod",
  //         "Texture Pack",
  //     ],
  // },
];

export default function GameSelector() {
  return (
    <section className="gameSelector">
      <div className="gameSelector__header">
        <h2 className="gameSelector__title">Supported Games</h2>

        <p className="gameSelector__subtitle">
          Choose a game to create a new project, import a .nr project, or open
          an existing one.
        </p>
      </div>

      <div className="gameSelector__grid">
        {games.map((game) => (
          <GameCard
            key={game.id}
            {...game}
            onClick={() => {
              console.log(`Selected ${game.name}`);
            }}
          />
        ))}
      </div>
    </section>
  );
}

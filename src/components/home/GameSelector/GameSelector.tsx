import "./GameSelector.css";

import GameCard from "./GameCard";

import { GameIcons } from "../../../assets/icons/games";

interface SupportedGame {
  id: string;
  name: string;
  description: string;
  icon: string;
  accentColor: string;
  installed: boolean;
  supportedProjectTypes: string[];
}

const games: SupportedGame[] = [
  {
    id: "minecraft-bedrock",
    name: "Minecraft Bedrock",
    description:
      "Create add-ons, resource packs, skin packs, scripts, and worlds.",
    icon: GameIcons.MinecraftBedrock,
    accentColor: "#101010",
    installed: true,
    supportedProjectTypes: [
      "Behavior Pack",
      "Resource Pack",
      "Skin Pack",
      "World Template",
    ],
  },

  // Uncomment these as support is added.

  /*
    {
        id: "terraria",
        name: "Terraria",
        description: "Build powerful mods using tModLoader.",
        icon: GameIcons.Terraria,
        accentColor: "#4C8B4F",
        installed: false,
        supportedProjectTypes: [
            "Mod",
            "Texture Pack",
        ],
    },

    {
        id: "minecraft-java",
        name: "Minecraft Java",
        description: "Create Fabric, Forge, NeoForge, Quilt and Paper projects.",
        icon: GameIcons.MinecraftJava,
        accentColor: "#4E7A42",
        installed: false,
        supportedProjectTypes: [
            "Fabric Mod",
            "Forge Mod",
            "NeoForge Mod",
            "Quilt Mod",
            "Paper Plugin",
        ],
    },

    {
        id: "stardew-valley",
        name: "Stardew Valley",
        description: "Create SMAPI mods and content packs.",
        icon: GameIcons.StardewValley,
        accentColor: "#6D9F45",
        installed: false,
        supportedProjectTypes: [
            "SMAPI Mod",
            "Content Pack",
        ],
    },

    {
        id: "ark-survival-ascended",
        name: "ARK: Survival Ascended",
        description: "Develop mods for ARK: Survival Ascended.",
        icon: GameIcons.ArkSurvivalAscended,
        accentColor: "#1C6F9A",
        installed: false,
        supportedProjectTypes: [
            "ASA Mod",
        ],
    },

    {
        id: "the-sims-4",
        name: "The Sims 4",
        description: "Create gameplay mods and custom content.",
        icon: GameIcons.TheSims4,
        accentColor: "#2AA7E8",
        installed: false,
        supportedProjectTypes: [
            "Gameplay Mod",
            "Custom Content",
        ],
    },

    {
        id: "wow-midnight",
        name: "World of Warcraft: Midnight",
        description: "Build addons for World of Warcraft.",
        icon: GameIcons.WowMidnight,
        accentColor: "#B58A2C",
        installed: false,
        supportedProjectTypes: [
            "Addon",
        ],
    },
    */
];

export default function GameSelector() {
  return (
    <section className="gameSelector">
      <div className="gameSelector__header">
        <h2 className="gameSelector__title">Supported Games</h2>

        <p className="gameSelector__subtitle">
          Choose a game to create a new project, import a<strong> .nr </strong>
          project, or open an existing one.
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

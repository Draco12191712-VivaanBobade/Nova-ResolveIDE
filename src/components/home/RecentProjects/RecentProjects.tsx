import "./RecentProjects.css";

import { GameIcons } from "../../../assets/images/icons/games";

interface RecentProject {
    id: string;
    name: string;
    gameId: keyof typeof GameIcons;
    path: string;
    lastOpened: string;
}

/*
 * TODO:
 * Replace this with RecentProjectsService.getRecentProjects()
 */
const recentProjects: RecentProject[] = [];

/**
 * TODO:
 * Eventually replace this with your Game Registry.
 */
const gameNames: Record<keyof typeof GameIcons, string> = {
    minecraftbedrock: "Minecraft Bedrock",
    minecraftjava: "Minecraft Java",
    terraria: "Terraria",
    arksurvivalascended: "ARK: Survival Ascended",
    stardewvalley: "Stardew Valley",
    thesims4: "The Sims 4",
    wowmidnight: "World of Warcraft: Midnight",
};

export default function RecentProjects() {
    return (
        <section className="recentProjects">
            <div className="recentProjects__header">
                <h2 className="recentProjects__title">
                    Recent Projects
                </h2>

                {recentProjects.length > 0 && (
                    <button
                        className="recentProjects__viewAll"
                        type="button"
                    >
                        View All
                    </button>
                )}
            </div>

            {recentProjects.length === 0 ? (
                <div className="recentProjects__empty">

                    <div className="recentProjects__emptyIcon">
                        📁
                    </div>

                    <h3 className="recentProjects__emptyTitle">
                        No Recent Projects
                    </h3>

                    <p className="recentProjects__emptyDescription">
                        Open an existing project or create a new one to
                        quickly access it from here.
                    </p>

                    <div className="recentProjects__actions">
                        <button
                            className="recentProjects__button"
                            type="button"
                        >
                            New Project
                        </button>

                        <button
                            className="recentProjects__button recentProjects__button--secondary"
                            type="button"
                        >
                            Open Project
                        </button>
                    </div>

                </div>
            ) : (
                <div className="recentProjects__list">

                    {recentProjects.map((project) => (
                        <button
                            key={project.id}
                            className="recentProjects__card"
                            type="button"
                        >
                            <img
                                src={GameIcons[project.gameId]}
                                alt={gameNames[project.gameId]}
                                className="recentProjects__gameIcon"
                            />

                            <div className="recentProjects__info">

                                <div className="recentProjects__name">
                                    {project.name}
                                </div>

                                <div className="recentProjects__game">
                                    {gameNames[project.gameId]}
                                </div>

                                <div className="recentProjects__path">
                                    {project.path}
                                </div>

                            </div>

                            <div className="recentProjects__lastOpened">
                                {project.lastOpened}
                            </div>
                        </button>
                    ))}

                </div>
            )}
        </section>
    );
}
import TopBar from "../components/TopBar";
import ActivityBar from "../components/ActivityBar";
import GameCard from "../components/GameCard";

export default function HomePage() {
    return (
        <div className="app">

            <TopBar />

            <div className="main">

                <ActivityBar />

                <div className="center">

                    <h1>Nova Resolve IDE</h1>

                    <p>Universal tools for universal modding.</p>

                    <GameCard
                        title="Minecraft Bedrock Edition"
                        subtitle="Create add-ons"
                    />

                </div>

                <div className="docs">

                    Docs

                </div>

            </div>

        </div>
    );
}
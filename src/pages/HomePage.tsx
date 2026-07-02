import "./HomePage.css";

import Banner from "../components/home/Banner";
import GameSelector from "../components/home/GameSelector";
import GettingStarted from "../components/home/GettingStarted";
import RecentProjects from "../components/home/RecentProjects";
import WidgetStack from "../components/home/WidgetStack";

export default function HomePage() {
  return (
    <main className="homePage">
      <header className="homePage__hero">
        <img
          src="/icon-512.png"
          alt="Nova Resolve"
          className="homePage__logo"
          draggable={false}
        />

        <div className="homePage__heroContent">
          <h1 className="homePage__title">Nova Resolve</h1>

          <p className="homePage__subtitle">
            Universal tools for universal modding!
          </p>
        </div>
      </header>

      <Banner />

      <section className="homePage__topGrid">
        <GameSelector/>

        <WidgetStack/>
      </section>

      <GettingStarted/>

      <RecentProjects/>
    </main>
  );
}

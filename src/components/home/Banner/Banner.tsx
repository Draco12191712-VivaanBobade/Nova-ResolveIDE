import "./Banner.css";

const novaLogo = "/icon-512.png";

export default function Banner() {
  return (
    <header className="banner">
      <div className="banner__glass">
        <div className="banner__logoContainer">
          <img
            className="banner__logo"
            src={novaLogo}
            alt="Nova Resolve Logo"
            draggable={false}
          />
        </div>

        <div className="banner__content">
          <h1 className="banner__title">Nova Resolve</h1>

          <p className="banner__subtitle">
            Professional IDE for creating mods, add-ons, resource packs,
            scripts, and game content.
          </p>

          <div className="banner__version">Developer Preview • v0.1.0</div>
        </div>
      </div>
    </header>
  );
}

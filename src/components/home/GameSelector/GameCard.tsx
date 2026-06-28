import "./GameSelector.css";

export interface GameCardProps {
  id: string;

  name: string;

  description: string;

  icon: string;

  accentColor?: string;

  installed?: boolean;

  supportedProjectTypes?: string[];

  onClick?: () => void;
}

export default function GameCard({
  name,
  description,
  icon,
  accentColor = "#5E81FF",
  installed = true,
  supportedProjectTypes = [],
  onClick,
}: GameCardProps) {
  return (
    <button className="gameCard" onClick={onClick} type="button">
      {/* Accent Glow */}
      <div
        className="gameCard__glow"
        style={{
          background: `radial-gradient(circle, ${accentColor}55 0%, transparent 70%)`,
        }}
      />

      {/* Game Icon */}
      <div className="gameCard__iconContainer">
        <img className="gameCard__icon" src={icon} alt={`${name} icon`} />
      </div>

      {/* Information */}
      <div className="gameCard__content">
        <h3 className="gameCard__title">{name}</h3>

        <p className="gameCard__description">{description}</p>

        <div className="gameCard__badges">
          {supportedProjectTypes.map((type) => (
            <span key={type} className="gameCard__badge">
              {type}
            </span>
          ))}
        </div>
      </div>

      {/* Status */}
      <div
        className={`gameCard__status ${
          installed
            ? "gameCard__status--installed"
            : "gameCard__status--missing"
        }`}
      >
        {installed ? "Installed" : "Not Installed"}
      </div>
    </button>
  );
}

import type { GettingStartedItem } from "../../../data/gettingStarted";
interface Props {
    link: GettingStartedItem;
}

export default function GettingStartedLink({ link }: Props) {
  const handleClick = () => {
    // TODO: Replace with your Command Registry
    console.log(`Executing action: ${link.action}`);
  };

  return (
    <button
      type="button"
      className="gettingStarted__link"
      onClick={handleClick}
    >
      <div className="gettingStarted__linkLeft">
        <img
          className="gettingStarted__linkIcon"
          src={link.icon}
          alt=""
          draggable={false}
        />

        <div className="gettingStarted__linkContent">
          <span className="gettingStarted__linkTitle">{link.title}</span>

          <span className="gettingStarted__linkDescription">
            {link.description}
          </span>
        </div>
      </div>

      <div className="gettingStarted__linkArrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </div>
    </button>
  );
}

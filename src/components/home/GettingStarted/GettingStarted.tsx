import "./GettingStarted.css";

import GettingStartedLink from "./GettingStartedLink";

import { gettingStartedLinks } from "../../../data/gettingStarted";

export default function GettingStarted() {
  return (
    <section className="gettingStarted">
      <header className="gettingStarted__header">
        <h2 className="gettingStarted__title">Getting Started</h2>

        <p className="gettingStarted__subtitle">
          Everything you need to begin creating projects with Nova Resolve.
        </p>
      </header>

      <div className="gettingStarted__links">
        {gettingStartedLinks.map((link) => (
          <GettingStartedLink key={link.id} link={link} />
        ))}
      </div>
    </section>
  );
}

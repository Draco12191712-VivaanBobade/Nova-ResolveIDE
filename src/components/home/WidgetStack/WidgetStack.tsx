import { useState } from "react";

import "./WidgetStack.css";

import WidgetCard from "./WidgetCard";
import WidgetIndicator from "./WidgetIndicator";

import { widgets } from "./WidgetRegistry";

export default function WidgetStack() {
  const [currentWidget, setCurrentWidget] = useState(0);

  const previousWidget = () => {
    setCurrentWidget((current) =>
      current === 0 ? widgets.length - 1 : current - 1,
    );
  };

  const nextWidget = () => {
    setCurrentWidget((current) =>
      current === widgets.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section className="widgetStack">
      <header className="widgetStack__header">
        <h2 className="widgetStack__title">Discover</h2>

        <div className="widgetStack__controls">
          <button
            type="button"
            className="widgetStack__button"
            onClick={previousWidget}
            aria-label="Previous widget"
          >
            ←
          </button>

          <button
            type="button"
            className="widgetStack__button"
            onClick={nextWidget}
            aria-label="Next widget"
          >
            →
          </button>
        </div>
      </header>

      <WidgetCard widget={widgets[currentWidget]} />

      <WidgetIndicator
        count={widgets.length}
        current={currentWidget}
        onSelect={setCurrentWidget}
      />
    </section>
  );
}

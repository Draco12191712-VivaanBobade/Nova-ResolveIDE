import type { WidgetDefinition } from "./WidgetRegistry";

interface WidgetCardProps {
  widget: WidgetDefinition;
}

export default function WidgetCard({ widget }: WidgetCardProps) {
  return (
    <article
      className="widgetStack__card"
      aria-labelledby={`widget-${widget.id}`}
    >
      <div className="widgetStack__cardHeader">
        {widget.icon && (
          <img
            src={widget.icon}
            alt=""
            className="widgetStack__cardIcon"
            draggable={false}
          />
        )}

        <div className="widgetStack__cardTitles">
          <h3 id={`widget-${widget.id}`} className="widgetStack__cardTitle">
            {widget.title}
          </h3>

          {widget.subtitle && (
            <p className="widgetStack__cardSubtitle">{widget.subtitle}</p>
          )}
        </div>
      </div>

      <div className="widgetStack__cardContent">
        <widget.component />
      </div>
    </article>
  );
}

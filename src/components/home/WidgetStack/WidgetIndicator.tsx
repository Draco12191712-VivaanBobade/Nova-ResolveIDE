interface WidgetIndicatorProps {
  count: number;
  current: number;
  onSelect: (index: number) => void;
}

export default function WidgetIndicator({
  count,
  current,
  onSelect,
}: WidgetIndicatorProps) {
  return (
    <div
      className="widgetStack__indicator"
      role="tablist"
      aria-label="Widget Stack"
    >
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          type="button"
          className={`widgetStack__dot ${
            index === current ? "widgetStack__dot--active" : ""
          }`}
          onClick={() => onSelect(index)}
          aria-label={`Widget ${index + 1}`}
          aria-selected={index === current}
        />
      ))}
    </div>
  );
}

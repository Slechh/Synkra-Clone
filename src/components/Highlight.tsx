import clsx from "clsx";

type HighlightProps = {
  children: React.ReactNode;
  border?: boolean;
  textColor?: boolean;
  italic?: boolean;
};

export function TextHighlight({
  children,
  border = false,
  textColor = true,
  italic = false,
}: HighlightProps) {
  return (
    <span
      className={clsx(
        textColor && "text-dark-blue",
        border && "border-b-2 border-dark-blue",
        italic && "italic",
      )}
    >
      {children}
    </span>
  );
}

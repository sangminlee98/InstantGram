type ColorButtonProps = {
  text: string;
  size: "samll" | "big";
  onClick: () => void;
};

export default function ColorButton({
  text,
  size = "samll",
  onClick,
}: ColorButtonProps) {
  return (
    <div
      className={`rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 ${
        size === "big" ? "p-[0.3rem]" : "p-[0.15rem]"
      }`}
    >
      <button
        className={`bg-white rounded-sm hover:opacity-90 transition-opacity ${
          size === "big" ? "text-2xl p-4" : "text-base p-[0.3rem]"
        }`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

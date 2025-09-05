type SectionProps = {
  title: string;
  color: string;
  active?: boolean;
  onClick?: () => void;
};

export const Sections = ({ title, color, active = false, onClick }: SectionProps) => {
  const palette: Record<string, { text: string; ring: string; border: string; bg: string }> = {
    red: { text: "text-red-300", ring: "ring-red-400", border: "border-red-400", bg: "bg-red-400/10" },
    green: { text: "text-green-300", ring: "ring-green-400", border: "border-green-400", bg: "bg-green-400/10" },
    blue: { text: "text-blue-300", ring: "ring-blue-400", border: "border-blue-400", bg: "bg-blue-400/10" },
    yellow: { text: "text-yellow-300", ring: "ring-yellow-400", border: "border-yellow-400", bg: "bg-yellow-400/10" },
    purple: { text: "text-purple-300", ring: "ring-purple-400", border: "border-purple-400", bg: "bg-purple-400/10" },
    pink: { text: "text-pink-300", ring: "ring-pink-400", border: "border-pink-400", bg: "bg-pink-400/10" },
    gray: { text: "text-gray-300", ring: "ring-gray-400", border: "border-gray-400", bg: "bg-gray-400/10" },
  };

  const c = palette[color] || palette.gray;
  const stateCls = active
    ? `ring-2 ${c.ring} ${c.border} ${c.bg}`
    : "ring-0 border-white/20 hover:border-white/40";

  return (
    <button
      type="button"
      onClick={onClick}
  className={`text-3xl w-full font-bold mb-4 text-center rounded-lg p-2 ${c.text} border transition-all duration-200 ${stateCls} outline-none focus:outline-none focus-visible:outline-solid`}
  style={{ WebkitTapHighlightColor: "transparent", fontWeight: "bold" }}
    >
      {title}
    </button>
  );
};

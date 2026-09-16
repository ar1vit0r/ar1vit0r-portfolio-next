const ITEMS = [
  "Python", "C/C++", "Haskell", "Ruby", "SQL", "GraphQL", "LangGraph",
  "FastAPI", "Rails", "PyTorch", "Docker", "CUDA", "MLflow", "PostgreSQL",
  "Git", "Linux", "Neovim",
];

function Row() {
  return (
    <div className="flex gap-4 whitespace-nowrap animate-marquee">
      {ITEMS.map((item) => (
        <span key={item} className="text-dim text-sm">
          {item} <span className="text-border">/</span>
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-border py-4">
      <div className="flex gap-4">
        <Row />
        <Row />
      </div>
    </div>
  );
}

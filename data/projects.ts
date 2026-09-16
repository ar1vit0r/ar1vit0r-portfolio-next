export type ProjectCategory = "ai" | "systems" | "web" | "oss";

export interface FeaturedProject {
  title: string;
  titleColor: "cyan" | "magenta" | "green";
  href: string;
  descKey: string;
  tags: string[];
  categories: ProjectCategory[];
}

export interface CompactProject {
  title: string;
  href: string;
  tags: string[];
  categories: ProjectCategory[];
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    title: "OpenJarvis",
    titleColor: "cyan",
    href: "https://github.com/open-jarvis/OpenJarvis",
    descKey: "projectDesc.openjarvis",
    tags: ["Python", "Rust", "Tauri", "AI Agents"],
    categories: ["ai", "oss"],
  },
  {
    title: "Multimodal Video Annotation",
    titleColor: "magenta",
    href: "https://github.com/ar1vit0r/multimodal_video_annotation",
    descKey: "projectDesc.multimodal",
    tags: ["Python", "VLM", "Ollama"],
    categories: ["ai"],
  },
  {
    title: "Hypothetical Computer Simulator",
    titleColor: "green",
    href: "https://github.com/ar1vit0r/hyp-computer-sim",
    descKey: "projectDesc.hypsim",
    tags: ["Rust", "VM", "Assembler", "Systems"],
    categories: ["systems"],
  },
];

export const COMPACT_PROJECTS: CompactProject[] = [
  { title: "CUDA Pathfinder", href: "https://github.com/ar1vit0r/pathfinder_gpotion", tags: ["CUDA", "Elixir", "GPU"], categories: ["systems"] },
  { title: "Rails Job Board", href: "https://rails-job-board-zss5.onrender.com", tags: ["Ruby", "Rails", "Tailwind"], categories: ["web"] },
  { title: "Rails Marketplace", href: "https://rails-marketplace-etdm.onrender.com", tags: ["Ruby", "Rails", "E-commerce"], categories: ["web"] },
  { title: "Rails Project Manager", href: "https://rails-pm.onrender.com", tags: ["Ruby", "Rails", "Hotwire"], categories: ["web"] },
  { title: "Rails API", href: "https://rails-api-zm3n.onrender.com/api-docs", tags: ["Ruby", "Rails", "JWT"], categories: ["web"] },
  { title: "Rails AI Writer", href: "https://rails-ai.onrender.com", tags: ["Ruby", "Rails", "OpenAI"], categories: ["ai", "web"] },
];

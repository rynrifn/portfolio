export type Language = "id" | "en";

export interface Project {
  id: string;
  title: string;
  subtitle: { id: string; en: string };
  description: { id: string; en: string };
  tech: string[];
  highlights: { id: string; en: string }[];
  image: string;
  github?: string;
  demo?: string;
  category: "featured" | "other";
}

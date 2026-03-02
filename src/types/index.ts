export type Project = {
  id: number;
  images: string[];
  title: string;
  type: string;
  tech: string[];
  description: string;
  site: {
    id: number;
    link: string;
    button: string;
  }[];
};

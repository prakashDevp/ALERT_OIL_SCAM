export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar?: string;
    role?: string;
  };
  categories: string[];
  featured?: boolean;
}

export interface BlogCategory {
  id: string;
  name: string;
  description?: string;
}
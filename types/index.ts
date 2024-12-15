export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  subscription: 'none' | 'trial' | 'premium';
  subscriptionEndDate?: Date;
}

export interface Magazine {
  _id: string;
  title: string;
  description: string;
  coverImage: string;
  pdfUrl: string;
  publishDate: Date;
  isFeatured: boolean;
}

export interface Gallery {
  _id: string;
  title: string;
  imageUrl: string;
  description?: string;
}
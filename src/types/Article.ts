export default interface AcfArticle {
  id?: number;
  next?: number;
  date?: Date;
  order: number;
  title: string;
  image: number;
  content: string;
  preview: string;
  preview_link: string;
}

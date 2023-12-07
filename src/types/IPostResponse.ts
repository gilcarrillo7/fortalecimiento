import AcfArticle from "./Article";

export default interface IPostResponse {
  id: number;
  date: Date;
  date_gmt: Date;
  guid: any;
  modified: Date;
  modified_gmt: Date;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: any;
  content: any;
  excerpt: any;
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: any;
  categories: number[];
  tags: any[];
  acf: AcfArticle;
  _links: any;
}

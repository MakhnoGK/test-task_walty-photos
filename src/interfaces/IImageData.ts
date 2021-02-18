export interface IImageData {
  total: number;
  totalHits: number;
  hits: IImage[];
}

export interface IImage {
  webformatURL: string;
  type: string;
  tags: string;
}

export interface IImageData {
  total: number;
  hits: IImage[];
  totalHits: number;
}

export interface IImage {
  id: number,
  webformatURL: string;
  type: string;
  tags: string;
}

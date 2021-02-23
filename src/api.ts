import { IImageData } from './interfaces/IImageData';

const API_KEY = '20295782-d190a9f4db1bc0031bd7c6307';

export const getImages = async (term: string): Promise<IImageData> => {
  const response = await fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${term}`
  );
  return await response.json();
};

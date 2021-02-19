import { getImages } from "../api";

describe('Image request API', () => {
  it('fetches images', async () => {
    const images = await getImages('');
    expect(images).toHaveProperty('hits.length', 20);
  })
});

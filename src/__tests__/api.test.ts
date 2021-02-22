import { getImages } from '../api';

describe('Image request API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('fetches images', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        total: 2,
        totalHits: 3,
        hits: [
          {
            id: 123,
            webformatURL: 'url',
            tags: 'tag1, tag2, tag3',
            type: 'photo',
          },
        ],
      })
    );

    const res = await getImages('');
    expect(fetch.mock.calls.length).toEqual(1);
    expect(res).toHaveProperty('totalHits', 3);
  });
});

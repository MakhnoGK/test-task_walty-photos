import React from 'react';
import renderer from 'react-test-renderer';
import { ImageItem, ImageList } from '../components';
import { IImage } from '../interfaces/IImage';

describe('ImageList tests', () => {
  it('renders correctly', () => {
    const imageData: IImage = {
      id: 123,
      tags: 'test, test, test',
      type: 'photo',
      webformatURL: '/',
    };

    const tree = renderer.create(<ImageList images={[imageData]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import { ImageItem } from '../components';
import { IImage } from '../interfaces/IImage';

describe('ImageItem tests', () => {
  it('renders correctly', () => {
    const imageData: IImage = {
      id: 123,
      tags: 'test, test, test',
      type: 'photo',
      webformatURL: '/',
    };

    const tree = renderer.create(<ImageItem image={imageData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

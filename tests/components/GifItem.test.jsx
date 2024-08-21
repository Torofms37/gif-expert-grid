import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('testea a <GifItem/>', () => {
  const title = 'tete';
  const url ='www.google.com';


  test('debe coincidir con el snapshot', () => {
    const { container } = render( <GifItem title={title} url={url} />);
    expect( container ).toMatchSnapshot();
  });

  test('debe ostrar ña imagen y url indicado', () => {
    render( <GifItem title={title} url={url} />);
    expect(screen.getByRole('img').src ).toBe( url );
  })
  
} ) 
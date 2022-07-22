import Motorcycles from '../../components/Motorcycle';
import renderWthRedux from '../helpers/RenderWithRedux';

describe('Renders motorcycle page with out crush', () => {
  it('should Details component render ', () => {
    renderWthRedux(<Motorcycles />);
  });
});

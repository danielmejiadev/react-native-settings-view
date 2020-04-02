// Dependencies
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

/**
 * @file setup.js
 * @author Daniel Mejia.
 * @description Testing configuration for jest.
 */

Enzyme.configure({ adapter: new Adapter() });

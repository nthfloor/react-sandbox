import { shallow } from '../../enzyme';
import * as React from 'react';

import Home from 'core/Home'
import About from 'core/About'
import ContactUs from 'core/ContactUs'

import Main from 'core/Main';

describe("Main", () => {

  describe('component', () => {

    let element;

    beforeEach(() => {
      element = <Main />
    });

    it('renders as expected', () => {
      const component = shallow(element);
      expect(component).toMatchSnapshot();
    });

    it('routes / to Home', () => {
      const component = shallow(element);
      expect(component.find('Route[exact=true][path="/"]').first().prop('component')).toBe(Home);
    });

    it('routes /about to About', () => {
      const component = shallow(element);
      expect(component.find('Route[exact=true][path="/about"]').first().prop('component')).toBe(About);
    });

    it('routes /contact to ContactUs', () => {
      const component = shallow(element);
      expect(component.find('Route[path="/contact"]').first().prop('component')).toBe(ContactUs);
    });

  });

});
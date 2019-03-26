import React from 'react'
import {mount} from 'enzyme'
import {navigate, setPath, getPath, useRoutes} from '../src/router'
import { cleanup, act } from 'react-hooks-testing-library'

const routes = {
  '/': () => <div>Home</div>,
  '/products': () =><div>Products</div>,
  '/products/:id': ({id}) => <div>Product id is: {id}</div>
};

describe("Router", () => {
  const MyApp = () => {
      const routeResult = useRoutes(routes);
      return routeResult || <div>Not found</div>;
  }

  let component

  beforeEach(() => {
    component = mount(<MyApp />)
  })

  afterEach(() => {
    component.unmount()
    cleanup()
  })

  it('should navigate', () => {
    act(() => navigate('/some-path'))
    expect(window.location.pathname).toBe('/some-path')
  })

  it('should set path', () => {
    expect(setPath('/my-path')).toBe('/my-path')
  })

  it('should get path', () => {
    act(() => navigate('/some-path'))
    expect(getPath()).toBe('/some-path')
  })
  
  it('should navigate to home', () => {
      act(() => navigate('/'))
      expect(component.text()).toBe('Home')
  })

  it('should default to not found', () => {
    act(() => navigate('/not-found'))
    expect(component.text()).toBe('Not found')
  })


  it('should navigate to products', () => {
    act(() => navigate('/products'))
    expect(component.text()).toBe('Products')
  })

  it('should navigate to products with id', () => {
    act(() => navigate('/products/123'))
    expect(component.text()).toBe('Product id is: 123')
  })

})
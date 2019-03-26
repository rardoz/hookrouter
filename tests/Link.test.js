import React from 'react'
import {mount} from 'enzyme'
import A from '../src/Link'

describe('Link', () => {
  const onClickFn = jest.fn()

  const component = mount(
    <div>
      <A href="/test" onClick={onClickFn}>Test Link</A>
    </div>
  );

  it('should have expected text', () => {
   expect(component.text()).toBe('Test Link')
  })

  it('should have expected url', () => {
    expect(component.find('a[href="/test"]')).toBeTruthy()
  })

  it('should have onClick event', () => {
    mount(component.find('a').get(0)).simulate('click')
    expect(onClickFn).toHaveBeenCalled()
  })
})
import React from 'react'
import useRedirect from '../src/redirect'
import { renderHook, cleanup } from 'react-hooks-testing-library'

describe('useRedirect hook', () => {
  afterEach(cleanup)

  it('should redirect when the path matches', () => {
    renderHook(() => useRedirect('/', '/my-redirect'))
    expect(window.location.pathname).toBe('/my-redirect')
  })

  it('should not redirect if the path does not match', () => {
    renderHook(() => useRedirect('/test', '/my-redirect'))
    expect(window.location.pathname).toBe('/my-redirect')
  })
})
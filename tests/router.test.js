import React from 'react'
import {navigate, setPath, getPath, useRoutes} from '../src/router'

describe("Router", () => {
  beforeEach(() => {
    window.location = '/'
  })

  it('should navigate', () => {
    navigate('/some-path')
    expect(window.location.pathname).toBe('/some-path')
  })

  it('should set path', () => {

  })

  it('should get path', () => {

  })
  
  it('should use routes', () => {

  })
})
import React from 'react'
import { render } from 'react-dom'
import { hello, goodbye } from './lib'

render(
  <div>
    {hello}
    {goodbye}
  </div>,
  document.getElementById('react-container')
)

//Without Babel this doesn't work in the browser - the error shows "unexpected syntax <" i.e. the first time JSX occurs
//We therefore need a transpiler (Babel) to allow this

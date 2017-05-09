import React from 'react'
import { render } from 'react-dom'
import "babel-polyfill"
import Root from './components/Root'
import './stylesheets/main.scss'

render(
  <Root />,
  document.getElementById('app')
)


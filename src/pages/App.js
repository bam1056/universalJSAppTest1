import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      message: 'INITIAL MESSAGE BEFORE CLICK'
    }
  }
  handleClick = () => {
    console.log('CLICKED')
    window.fetch('http://localhost:3000/api/user')
    .then(res => res.json())
    .then(json => this.setState({message: json}))
  }

  render () {
    return <div>
      <h1>{this.state.message}</h1>
      <Link to='/example'>EXAMPLE</Link>
      <button onClick={this.handleClick}>CLICK ME</button>
    </div>
  }
}

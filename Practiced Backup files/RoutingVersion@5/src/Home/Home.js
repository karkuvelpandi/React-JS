import React, { Component } from 'react'
import img1 from "../Images/img1.jpg"
class Home extends Component {
  render() {
    return <div>
      <h1>Home</h1>
      <img src={img1} width="250px" />
    </div>

  }
}

export default Home
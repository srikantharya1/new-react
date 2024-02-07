import React, { Component } from 'react'
import Cprops from './Cprops'

export default class Cstate extends Component {
    state = {
        sentence:"This is a STATE of Class Component",
        sentence1:"This is a PROPS of Class Component"
    }
  render() {
    return (
      <div>
        <center>
            <h1>{this.state.sentence}</h1>
            <Cprops name={this.state.sentence1}/>
        </center>
      </div>
    )
  }
}

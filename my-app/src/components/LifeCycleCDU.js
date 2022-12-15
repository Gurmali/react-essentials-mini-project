import React, { Component } from 'react'
import LifeCyclesCDUChild from './LifeCycleCDUChild'

export class LifeCycleCDU extends Component {
    constructor(props) {
        console.log('greeting constructor called')
      super(props)
    
      this.state = {
         greeting: 'Hello!'
      }
    }
    updateGreeting = () => {
        console.log('update greeting called')
        this.setState(prevState => {
            return {
                greeting: prevState.greeting  === 'Hello!' ? 'Goodbye!' : 'Hello!'
        }
        })
    }
    componentDidUpdate() {
        console.log("component updated")
    }
  render() {
    console.log('greeting render called')
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <button onClick={this.updateGreeting}>Update Greeting</button>
        <LifeCyclesCDUChild />
      </div>
    )
  }
}

export default LifeCycleCDU
import React, { Component } from 'react'
import importedNames from "../names"
export class SearchBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         names: importedNames
      }
    }
    
    handleChange = (event) => {
        const inputText = event.target.value.toLowerCase()
        console.log(inputText)
        const filteredNames = importedNames.filter(names => {
            return names.toLowerCase().includes(inputText)
        })
        this.setState({
            names: filteredNames
        })
    }
    
  render() {
    return (
      <div>
        <h1>Name Search</h1>
        <p>Matching names found:{this.state.names.length}</p>
        <form>
            <input 
            onChange={(event) => this.handleChange(event)}
            type="text" 
            placeholder="Search Names" />
        </form>
        <div style={{margin: "auto"}}>
            {this.state.names.map(names => {
                return <p key={names}>{names}</p>
            })}
        </div>
      </div>
    )
  }
}

export default SearchBar
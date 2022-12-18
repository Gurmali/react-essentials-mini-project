import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "",
         category: "website",
         comments: "",
      }
    }

    handleNameChange = (event) => {
      this.setState({
          name: event.target.value
      })
    }

    handleCatagory = (event) => {
      this.setState({
        category: event.target.value
      })
    }

    handleComments = (event) => {
      this.setState({
        comments: event.target.value
      })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      console.log(this.state)
    }

  render() {
    return (
      <div>
        <h2>Please fill out the form below:</h2>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor='id-name'>Your name</label>
                <input 
                  value={this.state.name} 
                  id="id-name" typ="text" 
                  name="name" 
                  onChange={this.handleNameChange}
                />
              </div>
              <div>
                <label htmlFor='id-category'>Query category:</label>
                <select 
                value={this.state.category}
                onChange={this.handleCatagory}
                id="id-category" 
                name="category">
                    <option value="website">Website issue</option>
                    <option value="order">Order issue</option>
                    <option value="general">General inquiry</option>
                </select>
              </div>
              <div>
                <label htmlFor='id-comments' value={this.state.comments} onChange={this.handleComments} >Comments:</label>
                <textarea 
                value={this.state.comments}
                onChange={this.handleComments}
                id="id-comments" 
                name="comments" />
              </div>
                <input type="submit" value="submit" />
            </form>
      </div>
    )
  }
}

export default ControlledForm
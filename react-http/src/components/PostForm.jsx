import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
     constructor(props) {
          super(props)

          this.state = {
               userId: '',
               title: '',
               body: ''
          }
     }
     changeHandler = (e) => {
          this.setState({ [e.target.name]: e.target.value })
     }
     submitHandler = (e) => {
          e.preventDefault()
          console.log(this.state)
          axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
               .then(response => {
                    console.log(response)
               }).catch(error => {
                    console.log(error)
               })
     }
     render() {
          const { userId, title, body } = this.state
          return (
               <div>Post-Form
                    <form onSubmit={this.submitHandler}>
                         <div>
                              <label htmlFor="userId">userId</label>
                              <input type="text" id="userId" name="userId" value={userId} onChange={this.changeHandler} />
                         </div>
                         <div>
                              <label htmlFor="title">Title</label>
                              <input type="text" id="title" name="title" value={title} onChange={this.changeHandler} />
                         </div>
                         <div>
                              <label htmlFor="body">Body</label>
                              <input type="text" id="body" name="body" value={body} onChange={this.changeHandler} />
                         </div>
                         <button type="submit">Submit</button>
                    </form>
               </div>
          )
     }
}

export default PostForm
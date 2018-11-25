import React, { Component } from "react";



class ReplyForm extends React.Component {
  constructor() {
    super()
  }
  render(){
    return(
      <div>I'm ReplyForm</div>
    )
  }
}

class CommentBox extends React.Component {
  constructor() {
    super();
    this.state = {
      showReply: false
    }
  }
  onClick(e){
    e.preventDefault();
    this.setState({showReply: !this.state.showReply})
  }
  
  render() {
    return (
      <div>
        <p>Some comment</p>
         <a onClick={this.onClick.bind(this)} href='#'>Post a reply to this comment</a>
        {this.state.showReply && < ReplyForm / >}
      </div>
    )
  }
}

export default CommentBox;
import React, {Component} from 'react';
import './css/ChatContainer.css'
class ChatContainer extends Component {
  constructor(props){
      super(props);
	  this.state = {
      typing: false,
      msgText: '',
      }
      this.handleType = this.handleType.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
}

sendTypingCommand = websocket => () => {
  websocket.send(JSON.stringify({
    cmd: 'typing',
    value: this.state.typing
  })
);
}

handlePlayerClick = playerName => () => {
  var appendedMessage = '@' + playerName + ' ';
  if(this.state.msgText.length === 0){
    this.setState({msgText:appendedMessage});
  }
  else{
    if(!this.state.msgText.includes(appendedMessage)){
    appendedMessage = appendedMessage + this.state.msgText + '';
    this.setState({msgText:appendedMessage})
  }
  }
  window.msgText = this.state.msgText;
}

parsePlayerMessage(msg){
 var name = msg.name;
 return (<div className="playerChat"><img className="chatImage" src={"/static/media/kfy8nir1jq131.5c2dc0c7.jpg"} /> <body> <strong onClick={this.handlePlayerClick(name)}>{name}</strong> | {msg.msg} </body> </div>);
}
parseMessages = messagesArray => () => {

}

handleType(event) {
   this.setState({msgText: event.target.value});
 }

 handleSubmit(event) {
   this.setState({msgText:''});
    event.preventDefault();
  }


render(){
  var {messages} = this.props;
  var messagesArr = [];
  messages.map(message => {
    let messageElement;
    if(message.msgType === 0){
    messageElement = this.parsePlayerMessage(message)
    }
    messagesArr.push(
      messageElement
    )
  }
);
  return(
  <div>
  <div className="chatContainer">
  {messagesArr}
  </div>
  <div className="chatInput">
  <form onSubmit={this.handleSubmit}>
  <input type="text" placeholder="Enter a message here..." value={this.state.msgText} onChange={this.handleType}/>
</form>
</div>
  </div>
);
}
}


export default ChatContainer;

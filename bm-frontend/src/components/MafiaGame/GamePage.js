import React, {Component} from 'react';
import PlayerContainer from './PlayerContainer.js'
import ChatContainer from './ChatContainer.js'
import GameBanner from './GameHeader.js'
import ChatMeeting from './ChatMeeting.js'

import  './css/GameHeader.css'
class GamePage extends Component {
  constructor(props){
      super(props);
	  this.state = {
	      players : [{name:"test", id:0 },{name:"test2", id:0},{name:"test3", id:0},{name:"test4", id:0},{name:"test5", id:0},{name:"test6", id:0},{name:"test7", id:0},{name:"test8", id:0}],
	      graveyard :[{name:"test", playerid:0, roleid: 0}], 
	      messages: [{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'},{msgType: 0, name: 'test', msg:'hello'}],
      }

}
render(){
    return(
	<div>
	    <div className="gameHeader">
	    <GameBanner />
	    </div>
	    
	    
	
	    <div className="gameContainer" style={{display:"flex", paddingTop:"50px"}}>	

		<div className="players" style={{paddingRight: "30px"}}>
		    <PlayerContainer players={this.state.players} graveyard={this.state.graveyard} messages={this.state.messages}/>
		</div>


		<div className="chat" style={{margin:'0 auto', overflowX: "hidden"}}>
		    <ChatContainer messages={this.state.messages}/>
		</div>
		
		<div className="meeting">
		    <ChatMeeting members={this.state.players}/>
		</div>
		
		
	    
	</div>
	    </div>
      

  );
}
}

export default GamePage;

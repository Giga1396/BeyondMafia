import React, {Component} from 'react';
import "./css/ChatMeeting.css"
import dropDown from "./assets/caret-square-down.svg"
import role from './assets/default-role.png'
class ChatMeeting extends Component {
  constructor(props){
      super(props);
	  this.state = {
	      votedPlayer: 0,
	      votingListHovered: false,
	      meetingName: "Vilage"
	  }
      this.handleMeetingVote =  this.handleMeetingVote.bind(this);
  }
      handleMeetingVote = playerID => () =>{
	  {/* should also send a websocket message to game server to indicate vote state */} 
	  this.setState({votedPlayer:playerID});  
      }
 
    render(){
	{/* members will contain the js obj list of applicable votes */} 
	var {members} = this.props;
	let memberArray = [];
	let votingList = [];
	members.map(member =>{
	    if(!member.votedPlayer){
	    memberArray.push(
		
		<div className="meetingMember" onClick={this.handleMeetingVote(member.id)}>
		    <div className="memberName"><span style={{color:"#C52213"}}> {member.name}</span> </div>
		</div>
	    )
	    }
		else{
		    memberArray.push(
			<div className="meetingMember" onClick={this.handleMeetingVote(member.id)}>
			    <div className="memberName"><span style={{color:"#C52213"}}> {member.name} </span>  votes {member.currentVote} </div>
			</div>
		    )
		}
	    if(this.state.votingListHovered){
		votingList.push(
		    <div className="playerVote" onClick={this.handleMeetingVote(member.id)}>
		    
		    {/*should use playerid to get image of photo*/}
		    <img src={role} className="votingImage" width="25" length="25" />
		    <span> {member.name} </span>
		    </div>

		    )
		    }
	})
	console.log(votingList);
	return(
	    <div>
		<h1> {this.state.meetingName} Meeting </h1>
		{memberArray}
		
		<div className="voteToggle"
		     onMouseEnter={()=> this.setState({votingListHovered:true})}
		     onMouseLeave={()=> this.setState({votingListHovered:false})} >
		    <img src={dropDown} height="25" width="25" className="dropDown"/>
		    <span>Pick a player</span>

		    <div className={this.state.votingListHovered ? "votingList" : "votingList-nb"}>
			 {votingList}
			 </div>
		</div>
		
	    </div>	
	);
    }
}

export default ChatMeeting;

import React, {Component} from 'react';
import './css/GameHeader.css'
class GameHeader extends Component {
  constructor(props){
    super(props);
      this.state = {
	  numPlayers: 0,
	  playersUpdated: false,
	  maxPlayers: 1,
	  gameStarted: false,
	  countDownTimer:false,
      }
  }

    render(){
	let gameBanner;
	if(this.state.playersUpdated){
	    if(this.state.numPlayers === this.state.maxPlayers){ 
		gameBanner = <div className="gameBanner">
				    <div className="headerText"> Game is starting...
				    </div>
			     </div>;
		this.setState({playersUpdated:false});
		setTimeout(()=>{
		    this.setState({countDownTimer:true})
		}, 2000);
	    }
	}
	else{
		gameBanner = <div className="gameBanner">
				    <div className="headerText">
					Waiting for {this.state.maxPlayers - this.state.numPlayers} more players...
				    </div>
				 
			     </div>;
	    
	}
	if(this.state.gameStarted){
	    gameBanner = <div className = "gameBanner">
			     <div className="headerText">
				 {/* This mode displays the day/night cycle */} 
				 {this.state.gameState}
			     </div>
			 </div>;
	}
	return(
	    <div>
		{gameBanner}
		</div>
      
  )}
}

export default GameHeader;

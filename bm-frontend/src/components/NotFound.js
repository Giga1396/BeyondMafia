import React, {Component} from 'react';


class NotFound extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

render(){
  return(
<div>
<p> Requested page not found! </p>
</div>
);
}
}

export default NotFound;

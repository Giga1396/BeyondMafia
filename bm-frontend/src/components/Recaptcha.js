import React, {Component} from 'react';
import ReCAPTCHA from "react-google-recaptcha";

class Recaptcha extends Component {
  constructor(props){
    super(props);
      this.state = {
	  
    }
  }

render(){
  return(
<div>
<ReCAPTCHA
    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
    onChange={(value)=>{
	window.recaptcha = value;
    }}
    onExpired={()=>{
	window.recaptcha = '';
    }}
    onErrored={()=>{
	window.recaptcha = ''}}
  />
    
</div>
);
}
}

export default Recaptcha;

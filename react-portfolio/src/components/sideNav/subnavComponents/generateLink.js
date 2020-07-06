import React from 'react';
import GenerateSubnav from './generateSubnav';

class generateLink extends React.Component {
  render() {
  	let data = this.props.data
  	if(data.subnav){
  		return <GenerateSubnav data={data} />
  	}
    return <li key={data.text} className="test">{data.text}</li>
  }
}
export default generateLink;
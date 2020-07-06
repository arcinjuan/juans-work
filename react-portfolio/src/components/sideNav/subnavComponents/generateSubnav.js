import React from 'react';
import GenerateLink from './generateLink'

class generateSubnav extends React.Component {
  render() {
  	let data = this.props.data
  	// console.log(data)
    return (
    	<li key={this.props.id}>{data.text}
	    	<ul>
	    		{data.subnav.map((link, i) => {
	    			return <GenerateLink data={link} key={link.text}/>
	    		})}
	    	</ul>
    	</li>
    )
  }
}
export default generateSubnav;
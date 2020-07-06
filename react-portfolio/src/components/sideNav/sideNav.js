import React from 'react';
import links from './routes';
import GenerateNav from './subnavComponents/generateNav'

import { FaBars } from 'react-icons/fa';


class sideNav extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			navOpen: false,
		}
	}

	toggleNav = () => {
		this.setState(prevState => ({
			navOpen: !prevState.navOpen
		}));
	}
  render() {
  	if (!this.state.navOpen){
  		return <span onClick={this.toggleNav}><FaBars /></span>
  	}
    return (
    	<aside>
    		<span onClick={this.toggleNav}><FaBars /></span>
    		<GenerateNav data={links} />
    	</aside>
    )
  }
}

export default sideNav;
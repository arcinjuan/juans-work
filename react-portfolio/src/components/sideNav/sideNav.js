import React from 'react';
import links from './routes';
import GenerateNav from './subnavComponents/generateNav';
import Styles from './side-nav.css';

import { FaBars } from 'react-icons/fa';


class sideNav extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			navOpen: true,
		}
	}

	toggleNav = () => {
		this.setState(prevState => ({
			navOpen: !prevState.navOpen
		}));
	}
  render() {
  	if (!this.state.navOpen){
  		return <span onClick={this.toggleNav} className="sub-nav-icon"><FaBars /></span>
  	}
    return (
    	<aside id="side-nav">
    		<div className="nav-toggle">
    			<span onClick={this.toggleNav} className="sub-nav-icon"><FaBars /></span>
    		</div>
    		<GenerateNav data={links} />
    	</aside>
    )
  }
}

export default sideNav;
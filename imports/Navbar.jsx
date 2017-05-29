import React,{Component} from 'react';
import AccountsUI from './AccountsUI';
import TrackerReact from 'meteor/ultimatejs:tracker-react';



export default class Navbar  extends TrackerReact(Component){

	constructor(props) {
		super(props);
		this.state=
		{
			logged:false
		}
	}


	render()
	{

	return (
			<div className="menuPrincipal">
			<h1>BitPad <a><AccountsUI /></a> | <a>Tutorial</a> | <a href="https://github.com/felipecuetor/bitpad">Source Code</a> </h1>
			</div>
			)

	}
}


	
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
Notas= new Mongo.Collection("imagenes");

export default class NotasWrapper extends TrackerReact(Component){


	constructor() {
		super();
		this.state=
		{
			filters:{},
			count:36,
			query:"",
			subscription:{
				notas:Meteor.subscribe("obtenerListaNotas",{})
			}
		}

	}

	componentWillUnmount() {
		this.state.subscription.notas.stop();
	}


	imagenes()
	{
		return Notas.find({}).fetch();
	}

	render()
	{
		return(
		<div>
		Holi
		</div>)

	}
}

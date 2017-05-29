import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
Notas= new Mongo.Collection("notas");

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

	mainTAble()
	{
		return <div> no inicioooo </div>

			
			
	}



	noInicio()
	{
		return
						<div> no inicio </div>

			
			
	}



	imagenes()
	{
		Notas.find({}).fetch();
	}

	render()
	{
		return (

<div className="container-fluid rpgContainer">

    <div className="col-sm-1 column">
      <img className = "unit" src = "data/textures/wall.png"  id = "elem-1-1"></img><br></br>
      <img className = "unit" src = "data/textures/wall.png"  id = "elem-1-2"></img><br></br>
      <img className = "unit" src = "data/textures/wall.png"  id = "elem-1-3"></img><br></br>
      <img className = "unit" src = "data/textures/wall.png"  id = "elem-1-4"></img><br></br>
      <img className = "unit" src = "data/textures/wall.png"  id = "elem-1-5"></img><br></br>
      <img className = "unit" src = "data/textures/wall.png"  id = "elem-1-6"></img><br></br>
    </div>
    <div className="col-sm-1 column">
      <img className = "unit" src = "data/textures/wall.png"  id = "elem-2-1"></img><br></br>
      <img className = "unit" src = "data/textures/canvas.png"  id = "elem-2-2"></img><br></br>
      <img className = "unit" src = "data/textures/empty.png"  id = "elem-2-3"></img><br></br>
      <img className = "unit" src = "data/textures/empty.png"  id = "elem-2-4"></img><br></br>
      <img className = "unit" src = "data/textures/empty.png"  id = "elem-2-5"></img><br></br>
      <img className = "unit" src = "data/textures/wall.png"  id = "elem-2-6"></img><br></br>
    </div>

    <div className="col-sm-1 column">
      <img className = "unit" src = "data/textures/painting.png"  id = "elem-3-1"></img><br></br>
      <img className = "unit" src = "data/textures/empty.png"  id = "elem-3-2"></img><br></br>
      <img className = "unit" src = "data/textures/character3.png"  id = "elem-3-3"></img><br></br>
      <img className = "unit" src = "data/textures/table.png"  id = "elem-3-4"></img><br></br>
      <img className = "unit" src = "data/textures/empty.png"  id = "elem-3-5"></img><br></br>
      <img className = "unit" src = "data/textures/wall.png"  id = "elem-3-6"></img><br></br>
    </div>
    <div className="col-sm-1 column">
      <img className = "unit" src = "data/textures/wall.png"  id = "elem-4-1"></img><br></br>
      <img className = "unit" src = "data/textures/empty.png"  id = "elem-4-2"></img><br></br>
      <img className = "unit" src = "data/textures/empty.png"  id = "elem-4-3"></img><br></br>
      <img className = "unit" src = "data/textures/empty.png"  id = "elem-4-4"></img><br></br>
      <img className = "unit" src = "data/textures/empty.png"  id = "elem-4-5"></img><br></br>
      <img className = "unit" src = "data/textures/wall.png"  id = "elem-4-6"></img><br></br>
    </div>
    <div className="col-sm-1 column">
      <img className = "unit" src = "data/textures/wall.png"  id = "elem-5-1"></img><br></br>
      <img className = "unit" src = "data/textures/desk.png"  id = "elem-5-2"></img><br></br>
      <img className = "unit" src = "data/textures/empty.png"  id = "elem-5-3"></img><br></br>
      <img className = "unit" src = "data/textures/empty.png"  id = "elem-5-4"></img><br></br>
      <img className = "unit" src = "data/textures/empty.png"  id = "elem-5-5"></img><br></br>
      <img className = "unit" src = "data/textures/wall.png"  id = "elem-5-6"></img><br></br>
    </div>
    <div className="col-sm-1 column">
      <img className = "unit" src = "data/textures/wall.png"  id = "elem-6-1"></img><br></br>
      <img className = "unit" src = "data/textures/empty.png"  id = "elem-6-2"></img><br></br>
      <img className = "unit" src = "data/textures/empty.png"  id = "elem-6-3"></img><br></br>
      <img className = "unit" src = "data/textures/empty.png"  id = "elem-6-4"></img><br></br>
      <img className = "unit" src = "data/textures/empty.png"  id = "elem-6-5"></img><br></br>
      <img className = "unit" src = "data/textures/wall.png"  id = "elem-6-6"></img><br></br>
    </div>
    <div className="col-sm-1 column">
      <img className = "unit" src = "data/textures/wall.png"  id = "elem-7-1"></img><br></br>
      <img className = "unit" src = "data/textures/bed.png"  id = "elem-7-2"></img><br></br>
      <img className = "unit" src = "data/textures/empty.png"  id = "elem-7-3"></img><br></br>
      <img className = "unit" src = "data/textures/empty.png"  id = "elem-7-4"></img><br></br>
      <img className = "unit" src = "data/textures/empty.png"  id = "elem-7-5"></img><br></br>
      <img className = "unit" src = "data/textures/wall.png"  id = "elem-7-6"></img><br></br>
    </div>
    <div className="col-sm-1 column">
      <img className = "unit" src = "data/textures/wall.png"  id = "elem-8-1"></img><br></br>
      <img className = "unit" src = "data/textures/library.png"  id = "elem-8-2"></img><br></br>
      <img className = "unit" src = "data/textures/empty.png"  id = "elem-8-3"></img><br></br>
      <img className = "unit" src = "data/textures/empty.png"  id = "elem-8-4"></img><br></br>
      <img className = "unit" src = "data/textures/empty.png"  id = "elem-8-5"></img><br></br>
      <img className = "unit" src = "data/textures/wall.png"  id = "elem-8-6"></img><br></br>
    </div>
    <div className="col-sm-1 column">
      <img className = "unit" src = "data/textures/wall.png"  id = "elem-9-1"></img><br></br>
      <img className = "unit" src = "data/textures/library.png"  id = "elem-9-2"></img><br></br>
      <img className = "unit" src = "data/textures/empty.png"  id = "elem-9-3"></img><br></br>
      <img className = "unit" src = "data/textures/empty.png"  id = "elem-9-4"></img><br></br>
      <img className = "unit" src = "data/textures/empty.png"  id = "elem-9-5"></img><br></br>
      <img className = "unit" src = "data/textures/door.png"  id = "elem-9-6"></img><br></br>
    </div>
    <div className="col-sm-1 column">
      <img className = "unit" src = "data/textures/wall.png"  id = "elem-10-1"></img><br></br>
      <img className = "unit" src = "data/textures/empty.png"  id = "elem-10-2"></img><br></br>
      <img className = "unit" src = "data/textures/empty.png"  id = "elem-10-3"></img><br></br>
      <img className = "unit" src = "data/textures/empty.png"  id = "elem-10-4"></img><br></br>
      <img className = "unit" src = "data/textures/coatHanger.png"  id = "elem-10-5"></img><br></br>
      <img className = "unit" src = "data/textures/wall.png"  id = "elem-10-6"></img><br></br>
    </div>
    <div className="col-sm-1 column">
      <img className = "unit" src = "data/textures/wall.png"  id = "elem-11-1"></img><br></br>
      <img className = "unit" src = "data/textures/library.png"  id = "elem-11-2"></img><br></br>
      <img className = "unit" src = "data/textures/empty.png"  id = "elem-11-3"></img><br></br>
      <img className = "unit" src = "data/textures/empty.png"  id = "elem-11-4"></img><br></br>
      <img className = "unit" src = "data/textures/empty.png"  id = "elem-11-5"></img><br></br>
      <img className = "unit" src = "data/textures/wall.png"  id = "elem-11-6"></img><br></br>
    </div>
    <div className="col-sm-1 column">
      <img className = "unit" src = "data/textures/wall.png"  id = "elem-12-1"></img><br></br>
      <img className = "unit" src = "data/textures/wall.png"  id = "elem-12-2"></img><br></br>
      <img className = "unit" src = "data/textures/wall.png"  id = "elem-12-3"></img><br></br>
      <img className = "unit" src = "data/textures/wall.png"  id = "elem-12-4"></img><br></br>
      <img className = "unit" src = "data/textures/wall.png"  id = "elem-12-5"></img><br></br>
      <img className = "unit" src = "data/textures/wall.png"  id = "elem-12-6"></img><br></br>
    </div>
  </div>

			)		

	}
}

Notas= new Mongo.Collection("notas");

// Denegar cualquier actualización de las imágenes en el cliente, solo el servidor puede hacerlo.
Notas.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});


Meteor.publish("obtenerListaNotas",function(options){
		console.log(options);
	    var filtro = { user:this.userId };
	return Notas.find(filtro,options);

})


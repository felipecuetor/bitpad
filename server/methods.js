
import { ValidatedMethod } from 'meteor/mdg:validated-method';


export const obtenerNotaPorId = new ValidatedMethod({
  name: 'obtenerNotaPorId',
  validate: new SimpleSchema({
    id: { type: String }
  }).validator(),
  run({ id }) {

		if(!Meteor.userId())
		{
			throw new Meteor.Error('not-authenticated')
		}
		
		console.log("Getting note "+ id)
			
		return Notas.find({_id:id,user:Meteor.userId()});
		
		}
  
});


export const crearNuevaNota = new ValidatedMethod({
  name: 'crearNuevaNota',
  validate: new SimpleSchema({
    nota: { type: String }
  }).validator(),
  run({ nota }) {

		if(!Meteor.userId())
		{
			throw new Meteor.Error('not-authenticated')
		}
		
		console.log("Creating note "+ note);
			
		try
		{
		 Notas.insert({user:Meteor.userId(),note:nota});
		 return 1;
		}
		catch(err)
		{
			console.log(err.message);
			return 0;
		}

		}
  
});


export const actualizarNotaPorId = new ValidatedMethod({
  name: 'actualizarNotaPorId',
  validate: new SimpleSchema({
    id: { type: String },
    nota: { type: String },
  }).validator(),
  run({ id,nota }) {

		if(!Meteor.userId())
		{
			throw new Meteor.Error('not-authenticated')
		}
		
		console.log("Editing note "+ note);
			
		try
		{
		 Notas.update({user:Meteor.userId(),_id:id},{note:nota});
		 return 1;
		}
		catch(err)
		{
			console.log(err.message);
			return 0;
		}

		}
  
});


export const eliminarNotaPorId = new ValidatedMethod({
  name: 'eliminarNotaPorId',
  validate: new SimpleSchema({
    id: { type: String }
  }).validator(),
  run({ id }) {

		if(!Meteor.userId())
		{
			throw new Meteor.Error('not-authenticated')
		}
		
		console.log("Deleting note "+ note);
			
		try
		{
		 Notas.remove({_id:id});
		 return 1;
		}
		catch(err)
		{
			console.log(err.message);
			return 0;
		}

		}
  
});




// Get list of all method names on Lists
const LISTS_METHODS = _.pluck([
  crearNuevaNota,
  obtenerNotaPorId,
  actualizarNotaPorId,
  eliminarNotaPorId,
], 'name');
// Only allow 5 list operations per connection per second
if (Meteor.isServer) {
  DDPRateLimiter.addRule({
    name(name) {
      return _.contains(LISTS_METHODS, name);
    },
    // Rate limit per connection ID
    connectionId() { return true; }}, 5, 1000);
}
 
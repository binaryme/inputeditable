var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();
Template.inputeditable.events({
  'keyup input, keyup change, change': function(event, template)
  {
    delay(function(){
      var id = Router.current().params._id; //el contexto en el que va a editar
      var value = $(event.currentTarget).val(); //toma el val del input que se está editando
      var name = $(event.currentTarget).attr("name"); //tomo el name del input, para usar como key en mi key, value
      var info = _.object([name], [value]); //convierto mi key value en un objeto para insertar en mi base de datos
      Reportes.update({_id: id}, {$set: info}); //actualizo mi documento con mi key, value recibidos en var info
      console.log(info); //compruebo los datos
    }, 1000);
  }
});


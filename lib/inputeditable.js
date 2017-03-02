Template.registerHelper('_', function(){
    return _
})
var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();

function guardado(target) { //le paso el event.currentTarget en la función porque si no no la toma
  $(target).siblings( ".guardado" ).animate({opacity: 1});
  $(target).siblings( ".guardado" ).animate({ "top": "-=40px", opacity: 0 }, "slow" );
  $(target).siblings( ".guardado" ).css("top", "-20px");
}

Template.inputeditable.events({
  'keyup, change, focusout, keydown': function(event, template)
  {
    delay(function() {
      var id = Router.current().params._id; //el contexto en el que va a editar
      var name = $(event.currentTarget).attr("name"); //tomo el name del input, para usar como key en mi key, value
      var value = $(event.currentTarget).val(); //toma el val del input que se está editando
      var info = _.object([name], [value]); //convierto mi key value en un objeto para insertar en mi base de datos
      Reportes.update({_id: id}, {$set: info}); //actualizo mi documento con mi key, value recibidos en var info
      console.log(info); //compruebo los datos
      guardado(event.currentTarget); // función que muestra el mensaje de guardado correctamente
    }, 1000);
  }
});
Template.textareae.events({
  'keyup, change, keyup change, keyup textarea': function(event, template)
  {
    delay(function() {
      var id = Router.current().params._id;
      var name = $(event.currentTarget).attr("name");
      var value = $(event.currentTarget).val();
      var info = _.object([name], [value]);
      Reportes.update({_id: id}, {$set: info});
      console.log(info);
      guardado(event.currentTarget);
    }, 1000);
  }
});

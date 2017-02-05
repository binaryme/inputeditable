var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();
Template.inputeditable.events({
      'keypress input': function(event, template)
      {
        delay(function(){
          var id = Router.current().params._id; //el contexto en el que va a editar
          var value = $(event.currentTarget).val(); //toma el val del input que se está editando
          var name = $(event.currentTarget).attr("name");
          var info = _.object([name], [value]);
          console.log(info);
          Reportes.update({_id: id}, {$set: info});
        }, 1000);
      }
});
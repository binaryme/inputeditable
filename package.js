Package.describe({
  name: 'nubestra:inputeditable',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Input editable forma de uso:
            +EditableInput(name="planta" value=planta) 
            es un input editable, se le pasan 2 parámetros 
            el parametro name es el name del input
            el parametro value es el valor guardado en name',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.3');
  api.use('ecmascript');
  api.mainModule('inputeditable.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('nubestra:inputeditable');
  api.mainModule('inputeditable-tests.js');
});

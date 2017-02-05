Package.describe({
  name: 'nubestra:inputeditable',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Editable input with autosave for meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/nubestra/inputeditable',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.3');
  api.use([ 'ecmascript',
            'templating',
            'ui' ],
            'client' );
  api.mainModule('inputeditable.js', 'client');
  api.addFiles([
     'lib/inputeditable.html',
     'lib/inputeditable.js'
  ],
  'client' );
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('nubestra:inputeditable');
  api.mainModule('inputeditable-tests.js', 'client');
});

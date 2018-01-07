const noteRoutes = require('./note_routes');

module.exports = function(app, db) {
  noteRoutes(app,db);
};

// sample id - 5a511e0561e28a077e16bffd

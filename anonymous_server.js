(function() {
  
  // handler to login anonymously
  Meteor.accounts.registerLoginHandler(function(options) {
    if (!options.anonymous)
      return undefined; // don't handle
    
    // ok; if they are logging in, this means they don't have
    // a user yet. Create one. We don't need to ever find it again.
    var user = {services: {}};
    options = _.clone(options);
    options.generateLoginToken = true;
    return Accounts.insertUserDoc(options, user);
  });
})();

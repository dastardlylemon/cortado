/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var UserController = {
  index: function(req,res) {
    return res.view({
      description: 'This is a SailsJS / AngularJS Application'
    });
  }
};

module.exports = UserController;

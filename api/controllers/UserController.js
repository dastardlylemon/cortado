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
  },

  create: function(req,res) {
    var params = req.params.all();

    User.create({name: params.name, email: params.email}).exec(function(err, usr) {
      return res.json({
        notice: 'Created user with name ' + usr.name
      });
    });
  },

  retrieve: function(req,res) {
    User.findOne()
    .where({id: req.params.id})
    .populate('jobs')
    .exec(function(err, user) {
      if (err) {
        console.log('Could not retrieve user');
      }

      return res.json(user);
    });
  }
};

module.exports = UserController;

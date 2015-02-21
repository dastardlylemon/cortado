/**
 * JobController
 *
 * @description :: Server-side logic for managing Jobs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  create: function(req,res) {
    var params = req.params.all();

    Job.create({
      company: params.company,
      position: params.position,
      status: params.status,
      url: params.url,
      priority: params.priority,
      owner: params.owner
    }).exec(function(err,job) {
      if (err) {
        console.log('Could not create job');
      }

      return res.json({
        notice: 'Created job at ' + params.company
      });
    });
  },
};


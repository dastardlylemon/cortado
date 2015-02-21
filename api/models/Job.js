/**
* Job.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    company: 'STRING',
    position: 'STRING',
    status: 'STRING',
    url: 'STRING',
    priority: 'STRING',
    owner: {
      model: 'user'
    }
  }
};


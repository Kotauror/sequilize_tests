'use strict';
module.exports = (sequelize, DataTypes) => {
  var Visitors = sequelize.define('Visitors', {
    name: DataTypes.STRING
  }, {});
  Visitors.associate = function(models) {
    // associations can be defined here
  };
  return Visitors;
};
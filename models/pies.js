'use strict';
module.exports = (sequelize, DataTypes) => {
  var Pies = sequelize.define('Pies', {
    name: DataTypes.STRING
  }, {});
  Pies.associate = function(models) {
    // associations can be defined here
  };
  return Pies;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Krowa = sequelize.define('Krowa', {
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Krowa.associate = function(models) {
    // associations can be defined here
  };
  return Krowa;
};
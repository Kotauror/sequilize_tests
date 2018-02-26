'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    price: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };

  return user;
};

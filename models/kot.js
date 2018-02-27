'use strict';
module.exports = (sequelize, DataTypes) => {
  var Kot = sequelize.define('Kot', {
    name: DataTypes.STRING
  }, {});
  Kot.associate = function(models) {
    // associations can be defined here
  };

  return Kot;
};

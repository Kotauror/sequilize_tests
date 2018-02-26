'use strict';
module.exports = (sequelize, DataTypes) => {
  var Kot = sequelize.define('Kot', {
    name: DataTypes.STRING
  }, {});
  Kot.associate = function(models) {
    // associations can be defined here
  };

  Kot.glaszcz = function() {
    console.log("miau miau");
  }

  Kot.returnName = function() {
    console.log(this.name);
  }

  return Kot;
};

'use strict';

module.exports = function(sequelize, DataTypes) {
  var Thing = sequelize.define("Thing", {
    title: DataTypes.STRING,
    info: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
  });

  /*Thing
    .sync({force: true})
    .then(function (){
      return Thing.create({
        title: 'test',
        info: 'Angular with Sequelize',
        active: true
      });
    });*/

  return Thing;
};

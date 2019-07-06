module.exports = function(sequelize, DataTypes) {
  var Plants = sequelize.define('Plants', {
    commonName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    genus: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  return Plants;
};

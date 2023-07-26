module.exports = (sequelize, DataTypes) => {
  const PredictResult = sequelize.define("PredictResult", {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    noio: DataTypes.STRING,
    gender: DataTypes.STRING,
    sot: DataTypes.INTEGER,
    ho: DataTypes.INTEGER,
    viemhong: DataTypes.INTEGER,
    khotho: DataTypes.INTEGER,
    daudau: DataTypes.INTEGER,
    result: DataTypes.DOUBLE,
  });

  return PredictResult;
};

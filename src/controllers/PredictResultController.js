const { PredictResult } = require("../models");
module.exports = {
  async getAllResult(req, res) {
    try {
      const data = await PredictResult.findAll();

      res.send(data);
    } catch (err) {
      console.log("error: ", err);
    }
  },
  async addNewPredict(req, res) {
    try {
      console.log("req.body: ", req.body);
      const newResult = await PredictResult.create(req.body);
      res.send("Success");
    } catch (err) {
      console.log("error: ", err);
    }
  },
};

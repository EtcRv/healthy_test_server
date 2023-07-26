const PredictResultController = require("../controllers/PredictResultController");

module.exports = (app) => {
  app.get("/api/all-predict", PredictResultController.getAllResult);
  app.post("/api/add-predict", PredictResultController.addNewPredict);
};

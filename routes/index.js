const route = require("express").Router();
const {
  UserContoller,
  BiodataController,
  HistoryController,
} = require("../controller/index");

route.post("/user", UserContoller.createUser);
route.get("/user", UserContoller.getUser);
route.get("/user/:id", UserContoller.getUser);

route.post("/biodata", BiodataController.createBiodata);
route.get("/biodata", BiodataController.getBiodatas);
route.get("/biodata/:id", BiodataController.getBiodata);
route.put("/biodata/:id", BiodataController.editBiodata);
route.delete("/biodata/:id", BiodataController.deleteBiodata);

route.post("/history", HistoryController.createHistory);
route.get("/history", HistoryController.getHistory);

module.exports = route;

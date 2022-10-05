const { Router } = require("express");
const router = Router();
const productsRoute = require("./productsRoutes");
const controller = require("../controllers/indexController");
const cartRoute = require("./cartRoutes");
router.get("/", controller.index);
router.use("/api/products", productsRoute);
router.use("/cart", cartRoute);
module.exports = router;

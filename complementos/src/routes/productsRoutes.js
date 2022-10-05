const { Router } = require("express");
const router = Router();
const controller = require("../controllers/productsController");
const completedFields = (req, res, next) => {
  const { title, price, thumbnail } = req.body;
  title && price && thumbnail
    ? next()
    : res.status(300).send({ message: "Complete todo por favor" });
};
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", completedFields, controller.post);
router.put("/:id", completedFields, controller.put);
router.delete("/:id", controller.delete);

module.exports = router;

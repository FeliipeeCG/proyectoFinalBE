const { Router } = require("express");
const router = Router();
const controller = require("../controllers/productsController");
const { completedFields, adminAuth } =
  require("../middlewares/middlewares").default;
//RUTAS
router.get("/", adminAuth(true), controller.getAll);
router.get("/:id", adminAuth(true), controller.getById);
router.post("/", adminAuth(true), completedFields, controller.post);
router.put("/:id", adminAuth(false), completedFields, controller.put);
router.delete("/:id", adminAuth(false), controller.delete);

module.exports = router;

import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REgISTER || POST
router.post("/register", registerController);

//Login || POST
router.post("/login", loginController);

//Test Route
router.get("/test", requireSignIn, isAdmin, testController);

//protected Routes
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
export default router;

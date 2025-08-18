import express from "express";
import { signup, login } from "../controllers/auth.controller.js";
import { signupSchema, loginSchema } from "../middlewares/authValidator.js";
import { validate } from "../middlewares/validate.js";

const router = express.Router();

router.post("/signup", validate(signupSchema), signup);
router.post("/login", validate(loginSchema), login);

export default router;

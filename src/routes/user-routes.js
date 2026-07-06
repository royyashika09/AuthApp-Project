import { Router } from "express";
import * as authcontrollers from "../controllers/user-controllers.js";

const router = Router();

router.post("/register", authcontrollers.register);
router.post("/verify", authcontrollers.verifyEmail);
router.post("/login", authcontrollers.login);
router.post("/logout", authcontrollers.logout);



export default router;
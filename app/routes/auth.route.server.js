import { Router } from "express";
import { DisplayLoginPage, DisplayRegisterPage, ProcessRegisterPage, ProcessLogoutPage, ProcessLoginPage } from '../controllers/auth.controller.server.js';
const router = Router();

// Display Login page
router.get('/login', DisplayLoginPage);
router.post('/login', ProcessLoginPage);

//Display registration page
router.get('/register', DisplayRegisterPage);
router.post('/register', ProcessRegisterPage);

//Process log out page

router.get('/logout', ProcessLogoutPage);

export default router;


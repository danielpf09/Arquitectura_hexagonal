import { Router } from "express";
import { UserCreate } from "../User/application/UserCreate/UserCreate";


const router = Router();

router.get('/create', UserCreate.toString);


export default router;
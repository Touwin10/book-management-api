import { Router } from "express";
import { AuthorController } from "../controllers/author.controller";


const router = Router();
const controller = new AuthorController();

router.get("", controller.findAll);
router.post("", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export const authorRoute = router;
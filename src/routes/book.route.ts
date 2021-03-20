import { Router } from "express";
import { BookController } from "../controllers/book.controller";



const router = Router();
const controller = new BookController();

router.get("", controller.findAll);
router.post("", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);


export const bookRoute = router;
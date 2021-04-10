import { Router } from "express";
import { LibraryController } from "../controllers/library.controller";


const router = Router();
const controller = new LibraryController();

router.get("", controller.findAll);
router.post("", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export const libraryRoute = router;
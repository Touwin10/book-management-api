import { Router } from "express";
import { MemberController } from "../controllers/member.model";


const router = Router();
const controller = new MemberController();

router.get("", controller.findAll);
router.post("", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export const memberRoute = router;
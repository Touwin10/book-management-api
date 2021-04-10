import {Router} from "express";
import { authorRoute } from "./author.route";
import { bookRoute } from "./book.route";
import { libraryRoute } from "./library.route";
import { memberRoute } from "./member.route";

const routes = Router();

routes.use("/books", bookRoute);
routes.use("/library", libraryRoute);
routes.use("/authors", authorRoute);
routes.use("/members", memberRoute);

export default routes;

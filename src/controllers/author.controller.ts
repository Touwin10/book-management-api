import { AuthorService } from "../services/author.service";
import { Request, Response } from "express";
import { Author } from "../models/author.model";


export class AuthorController{
    
    authorService: AuthorService;

    constructor() {
        this.authorService = new AuthorService();
    }

    public create = async (req: Request, res: Response) => {

        const body = req.body as Author;

        try {
            const result  = await this.authorService.create(body);
            res.status(200).send(result);
        } catch (err) {
            res.status(400).send(err.message);
        }
    }

    public update = async (req: Request, res: Response) => {

        const body = req.body as Author;
        const { id } = req.params;

        try {
            const result  = await this.authorService.update(id, body);
            res.status(200).send(result);
        } catch (err) {
            res.status(400).send(err.message);
        }
    }

    public delete = async (req: Request, res: Response) => {

        const { id } = req.params;

        try {
            const result  = await this.authorService.delete(id);
            res.status(200).send(result);
        } catch (err) {
            res.status(400).send(err.message);
        }
    }

    public findAll = async (req: Request, res: Response) => {
        try {
            const result  = await this.authorService.findAll();
            res.status(200).send(result);
        } catch (err) {
            res.status(400).send(err.message);
        }
    }

}
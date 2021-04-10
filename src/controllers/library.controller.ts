import { LibraryService } from "../services/library.service";
import { Request, Response } from "express";
import { Library } from "../models/library.model";


export class LibraryController{
    
    libraryService: LibraryService;

    constructor(){
        this.libraryService = new LibraryService();
    }

    public create = async (req: Request, res: Response) => {

        const body = req.body as Library;

        try {
            const result  = await this.libraryService.create(body);
            res.status(200).send(result);
        } catch (err) {
            res.status(400).send(err.message);
        }
    }

    public update = async (req: Request, res: Response) => {

        const body = req.body as Library;
        const { id } = req.params;

        try {
            const result  = await this.libraryService.update(id, body);
            res.status(200).send(result);
        } catch (err) {
            res.status(400).send(err.message);
        }
    }

    public delete = async (req: Request, res: Response) => {

        const { id } = req.params;

        try {
            const result  = await this.libraryService.delete(id);
            res.status(200).send(result);
        } catch (err) {
            res.status(400).send(err.message);
        }
    }

    public findAll = async (req: Request, res: Response) => {
        try {
            const result  = await this.libraryService.findAll();
            res.status(200).send(result);
        } catch (err) {
            res.status(400).send(err.message);
        }
    }

}
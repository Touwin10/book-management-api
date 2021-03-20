import { Request, Response } from "express";
import { Book } from "../models/book.model";
import { BookService } from "../services/book.service";



export class BookController {

    bookService: BookService;

    constructor() {
        this.bookService = new BookService();
    }

    public create = async (req: Request, res: Response) => {

        const book = req.body as Book;

        try {
            const result  = await this.bookService.create(book);
            res.status(200).send(result);
        } catch (err) {
            res.status(400).send(err.message);
        }
    }

    public update = async (req: Request, res: Response) => {

        const book = req.body as Book;
        const { id } = req.params;

        try {
            const result  = await this.bookService.update(id, book);
            res.status(200).send(result);
        } catch (err) {
            res.status(400).send(err.message);
        }
    }

    public delete = async (req: Request, res: Response) => {

        const { id } = req.params;

        try {
            const result  = await this.bookService.delete(id);
            res.status(200).send(result);
        } catch (err) {
            res.status(400).send(err.message);
        }
    }

    public findAll = async (req: Request, res: Response) => {

        try {
            const result  = await this.bookService.findAll();
            res.status(200).send(result);
        } catch (err) {
            res.status(400).send(err.message);
        }

    }

}
import { connect } from "../config/db.config";
import { Book } from "../models/book.model";



export class BookService {
    
    private async repository() {
        const connection = await connect();
        const repo = await connection.getRepository(Book);
        return repo;
    }

    public async create(book: Book) {
        if (!book || !book.name)
            throw Error("Book Object is invalid");

        const repo = await this.repository();
        return repo.save(book);
    }

    public async update(id: string, book: Book) {
        if (!id)
            throw Error("The specified book ID is invalid");
        if (!book || !book.name)
            throw Error("Book Object is invalid");

        const repo = await this.repository();
        return repo.update(id, book);
    }

    public async delete(id: string) {
        if (!id)
            throw Error("The specified book ID is invalid");

        const repo = await this.repository();
        return repo.delete(id);
    }


    public async findAll(): Promise<Book[]> {
        const repo = await this.repository();
        return repo.find({});
    }
}
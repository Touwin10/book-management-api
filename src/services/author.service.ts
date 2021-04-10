import { connect } from "../config/db.config";
import { Author } from "../models/author.model";


export class AuthorService {

    private async repository() {
        const connection = await connect();
        const repo = await connection.getRepository(Author);
        return repo;
    }

    public async create(author: Author) {
        const repo = await this.repository();
        return repo.save(author);
    }

    public async update(id: string, author: Author) {
        if (!id)
            throw Error("The specified author ID is invalid");
        if (!author || !author.firstName || !author.lastName)
            throw Error("Author Object is invalid");

        const repo = await this.repository();
        return repo.update(id, author);
    }

    public async delete(id: string) {
        if (!id)
            throw Error("The specified author ID is invalid");

        const repo = await this.repository();
        return repo.delete(id);
    }

    public async findAll(): Promise<Author[]> {
        const repo = await this.repository();
        return repo.find({});
    }

}
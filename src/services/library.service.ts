import { connect } from "../config/db.config";
import { Library } from "../models/library.model";

export class LibraryService {

    private async repository() {
        const connection = await connect();
        const repo = await connection.getRepository(Library);
        return repo;
    }

    public async create(library: Library) {
        const repo = await this.repository();
        return repo.save(library);
    }

    public async update(id: string, library: Library) {
        if (!id)
            throw Error("The specified library ID is invalid");
        if (!library || !library.name)
            throw Error("Library Object is invalid");

        const repo = await this.repository();
        return repo.update(id, library);
    }

    public async delete(id: string) {
        if (!id)
            throw Error("The specified library ID is invalid");

        const repo = await this.repository();
        return repo.delete(id);
    }

    public async findAll(): Promise<Library[]> {
        const repo = await this.repository();
        return repo.find({});
    }

}
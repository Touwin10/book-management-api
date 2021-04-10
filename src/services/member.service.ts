import { connect } from "../config/db.config";
import { Member } from "../models/member.model";


export class MemberService {

    private async repository() {
        const connection = await connect();
        const repo = await connection.getRepository(Member);
        return repo;
    }

    public async create(member: Member) {
        const repo = await this.repository();
        return repo.save(member);
    }

    public async update(id: string, member: Member) {
        if (!id)
            throw Error("The specified member ID is invalid");
        if (!member || !member.firstName || !member.lastName)
            throw Error("Member Object is invalid");

        const repo = await this.repository();
        return repo.update(id, member);
    }

    public async delete(id: string) {
        if (!id)
            throw Error("The specified member ID is invalid");

        const repo = await this.repository();
        return repo.delete(id);
    }

    public async findAll(): Promise<Member[]> {
        const repo = await this.repository();
        return repo.find({});
    }

}
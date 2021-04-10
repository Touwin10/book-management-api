import { Request, Response } from "express";
import { Member } from "../models/member.model";
import { MemberService } from "../services/member.service";


export class MemberController{
    
    memberService: MemberService;

    constructor(){
        this.memberService = new MemberService();
    }

    public create = async (req: Request, res: Response) => {

        const body = req.body as Member;

        try {
            const result  = await this.memberService.create(body);
            res.status(200).send(result);
        } catch (err) {
            res.status(400).send(err.message);
        }
    }

    public update = async (req: Request, res: Response) => {

        const body = req.body as Member;
        const { id } = req.params;

        try {
            const result  = await this.memberService.update(id, body);
            res.status(200).send(result);
        } catch (err) {
            res.status(400).send(err.message);
        }
    }

    public delete = async (req: Request, res: Response) => {

        const { id } = req.params;

        try {
            const result  = await this.memberService.delete(id);
            res.status(200).send(result);
        } catch (err) {
            res.status(400).send(err.message);
        }
    }

    public findAll = async (req: Request, res: Response) => {
        try {
            const result  = await this.memberService.findAll();
            res.status(200).send(result);
        } catch (err) {
            res.status(400).send(err.message);
        }
    }

}
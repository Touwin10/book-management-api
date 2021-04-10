import { Address } from "cluster";
import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity({name:"member"})
export class Member{

    @ObjectIdColumn() 
    _id: ObjectID; 
    
    @Column() 
    firstName: string; 
    
    @Column() 
    lastName: string;

    @Column() 
    address:Address;

    @Column() 
    registrationDate:Date;

    @Column() 
    isActive:boolean;

    @Column() 
    type:MemberType;

}

export enum MemberType {
    STANDARD = 0,
    VIP = 1
}
import { Address } from "cluster";
import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";


@Entity({name:"author"})
export class Author{

    @ObjectIdColumn() 
    _id: ObjectID; 
    
    @Column() 
    firstName: string; 
    
    @Column() 
    lastName: string; 

    @Column() 
    biography:string;

    @Column() 
    dob:Date;

    @Column() 
    address: Address

}
import { Address } from "cluster";
import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity({name:"library"})
export class Library{

    @ObjectIdColumn() 
    _id: ObjectID; 
    
    @Column() 
    name: string; 
    
    @Column() 
    address:Address;

}
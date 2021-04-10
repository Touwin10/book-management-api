import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";


@Entity({name:"address"})
export class Address{

    @ObjectIdColumn() 
    _id: ObjectID; 
    
    @Column() 
    street: string; 
    
    @Column() 
    city: string; 

    @Column() 
    state:string;

    @Column() 
    zip:string;

}
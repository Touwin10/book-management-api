import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";


@Entity({name:"book"})
export class Book{

    @ObjectIdColumn() 
    _id: ObjectID; 
    
    @Column() 
    name: string; 

}
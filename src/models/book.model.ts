import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";


@Entity({name:"book"})
export class Book{

    @ObjectIdColumn() 
    _id: ObjectID; 
    
    @Column() 
    name: string; 

    price:number;
    subject:string;
    publicationDate:Date;
    genre: Genre;

}


export enum Genre {
    ADVENTURE = 0,
    HORROR = 1,
    FANTASY = 2,
    MYSTERY = 3,
    ROMANCE = 4,
    THRILLER = 5
}
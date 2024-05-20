import { Injectable } from "@nestjs/common";
import { Book } from "./Data/book.dto";
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class BookService{
    public books:Book[]=[];

//add book

addBookService(book:Book):string{
    book.id=uuidv4();
    this.books.push(book);
    return "book has beeen successfullly added";
}

updateBookService(book:Book):string{
    let index=this.books.findIndex((currentBook)=>{
        return currentBook.id==book.id;
        })
        this.books[index]=book;
        return "book has been successfully update";
}

//deleteBook
deleteBookService(bookId:string):string{
    this.books=this.books.filter((book)=>{
        return book.id!=bookId;
    });
return "book has beeen deleted"
}

findAllBooks():Book[]{
    return this.books;
}




}
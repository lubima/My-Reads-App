import React, {Component} from 'react';
import Book from "./Book";

export default class Shelf extends Component {
	render(){
      return(
        <div className="bookshelf">
           <h2 className="bookshelf-title">{this.props.title}</h2>
           <div className="bookshelf-books">
              <ol className="books-grid">
               {/* Here the Book components has been incorporated and the updateBook function from Book component applied with the new state from the ContextProvider, in order displaying the actual moving of the book to the new shelf */}
                 {this.props.books && this.props.books.map(book => <Book key={book.id} {...book} updateBook={this.props.updateBook}/>)}
              </ol>  
           </div>
        </div>  
      )
    }
}
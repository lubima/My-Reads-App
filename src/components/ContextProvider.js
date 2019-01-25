import React, { Component } from 'react';
export const MyContext = React.createContext();
export default class ContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      books: [],//an array of all the books
      currentlyReading: [],//an array which will hold the books with shelf title:currentlyReading
      wantToRead: [],//an array which will hold the books with shelf title:wantToRead
      read: [],//an array which will hold the books with shelf title:read
      addBooks: books => {
        const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
        const wantToRead = books.filter(book => book.shelf === 'wantToRead');
        const read = books.filter(book => book.shelf === 'read');
        this.setState({ books, currentlyReading, wantToRead, read });
      },
      //the function changes the state of a book to the new shelf when the new shelf is selected from the drop-down
      updateBook: (book, newShelf, allShelfs) => {
        const newBooks = this.state.books.map(allBooks => {
          const toBeMovedID = allShelfs[newShelf].find(
            bookID => bookID === allBooks.id
          );
          //
          if (toBeMovedID) {
            allBooks.shelf = newShelf;
          }
          return allBooks;
        });
        this.state.addBooks(newBooks);
      }
    };
  }
  render() {
    return (
      <MyContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </MyContext.Provider>

    );
  }
}

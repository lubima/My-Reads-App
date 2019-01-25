import React, { Component } from 'react';
import { update } from '../BooksAPI';

export default class Book extends Component {
/* 
  One of the cool things about async/await is that it makes sometimes very ugly 
  nested asynchronous code look just as simple and straightforward as synchronous code, 
  but it’s not synchronous code.
  If you need to access an event in an asynchronous way, 
  en you should call event.persist() at the beginning of the function. 
  This will take the SyntheticEvent out of the pool and prevent it from 
  being reclaimed by React.*/
  handleChange = async e => {
    e.persist();
    try {
      const shelf = e.target.value;// the constant that will be changed
      const book = this.props;// all the books passed from the Home page
      const result = await update(book, shelf);// update method from BookAPI used to move the book to the new shelf
      this.props.updateBook(book,shelf,result);//updates the shelf for the book
    } catch (error) {
      console.log(error);
    }

  }
  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.imageLinks ? this.props.imageLinks.thumbnail : ''})` }}></div>
            <div className="book-shelf-changer">
            {/* the handleChange function from above applied to the drop-down, in order the change to happen*/}
              <select onChange={this.handleChange} value={this.props.shelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          {/* Populates each book's title from the BooksAPI */}
          <div className="book-title">{this.props.title}</div> 
          {/* Populates each first book's author from the BooksAPI after checking if any authors exist for this book*/} 
          <div className="book-authors">{this.props.authors ? this.props.authors[0] : 'No Author'}</div>
        </div>
      </li>
    )
  }
}
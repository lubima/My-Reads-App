import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {search,getAll} from '../BooksAPI';
import Book from "../components/Book";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      books: []
    };
  }
  async componentDidMount() {
    try{
        const books = await getAll();
        this.props.addBooks(books);
      } catch(error){
        console.log(error);
      }
} 
  handleChange = async e => {
    try {
      const query = e.target.value;
      this.setState({ query });
      //makes sure all the books are shown or the result of the search
      if (query.trim()) {
        const results = await search(query);
        if (results.error) {
          this.setState({ books: [] })
        } else {
          this.setState({ books: results })
        }
      } else {
        this.setState({ books: [] })
      }
    } catch (error) {
      console.log(error);
    }

  }
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to={'/'}>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={this.handleChange} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {/* matches the shelf of the book from the Home page */}
            {this.state.books.length > 0 && 
              this.state.books.map(book => {
                const foundShelfFromHome = this.props.books.find(searchBook => searchBook.id===book.id);
                if(foundShelfFromHome){
                  book.shelf = foundShelfFromHome.shelf;
                } else {
                  book.shelf = 'none';
                }
                return (<Book key={book.id} {...book} updateBook={this.props.updateBook} />)})
            } 
            {/* shows No result on screen if there are no books found */}
            {this.state.books.length === 0 && <h1 style={{textAlign:'center'}}>No Results</h1>}
          </ol>
        </div>
      </div>)
  }
}


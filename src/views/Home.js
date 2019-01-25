import React, {Component} from 'react';
import Shelf from '../components/Shelf';
import SearchButton from '../components/SearchButton';
import {getAll} from '../BooksAPI';

export default class Home extends Component {
  /*
    componentDidMount() is the lifecycle hook that is run 
    right after the component is added to the DOM and should be used 
    if you're fetching remote data(from BookAPI)
  */
 	async componentDidMount() {
    	try{
        //gets all the book from the API
          const books = await getAll();
          //distributes the books to their corresponding shelf with the function from the ContextProvider
          this.props.addBooks(books);
        } catch(error){
        	console.log(error);
        }
  } 
 	render(){
      return(
        	<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            {/* Here the updateBook function is applied as well because we have the shelf component which has been updated */}
              <Shelf title={'Currently Reading'} books={this.props.currentlyReading} updateBook={this.props.updateBook}/>
        	  <Shelf title={'Want to Read'} books={this.props.wantToRead} updateBook={this.props.updateBook}/>
        	  <Shelf title={'Read'} books={this.props.read} updateBook={this.props.updateBook}/>
            </div>
            <SearchButton/>
    	 </div>
       )
    }
}



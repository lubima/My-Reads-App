import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SearchButton extends Component {
       render() {
              return (
                     <div className="open-search">
                     {/* Link to go to the Search page when clicking on the + button */}
                            <Link to={'/search'}>Add a book</Link>
                     </div>
              )
       }
}
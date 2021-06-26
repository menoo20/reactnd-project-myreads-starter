import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Book from './book'
import * as BooksAPI from './BooksAPI'
class SearchPage extends Component {
    state = {
        query: '',
        searchedBooks: []
    }

    handleSearch = (ev) => {
        //ev.preventDefault();
        this.setState({
            query: ev
        })
       this.handleSearchBooks(ev)
    }
    handleSearchBooks = (query) => {
      if(query) {
        BooksAPI.search(query).then(books => {
          if(books.error){
            this.setState({searchedBooks: []})
          }else{
            this.setState({searchedBooks: books})
          }
        })
      }else{ this.setState({searchedBooks: []})}
    }

    render() {
        const {query, searchedBooks} = this.state
        const {UpdateBookShelf} = this.props
        
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link  to='/'   className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input
                 value = {query}
                 onChange={(event) =>{this.handleSearch(event.target.value)}}
                type="text"
                placeholder="Search by title or author"/>
              </div>
            </div>     
            <div className="search-books-results"> 
            <ol className="books-grid">
            {searchedBooks.map((searchedBook)=> {
             return (  
            <li key={searchedBook.id}>
              <Book
               book={searchedBook}
               UpdateBookShelf = {UpdateBookShelf}
               currentShelf = {searchedBook.shelf}
              />
            </li>
            )}
            )}
            </ol>  
            </div>    
          </div>
        )
    }
}

export default SearchPage
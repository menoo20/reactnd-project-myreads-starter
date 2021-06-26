import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Shelf from './bookShelves/Shelf'
class BookLists extends Component {
 
  
    render() {
        const { read, wantToRead, currentlyReading, UpdateBookShelf} = this.props
      
        return (
            <div className="list-books">
           
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                  <Shelf 
                  name="CurrentlyReading"
                  books = {currentlyReading}
                  UpdateBookShelf={UpdateBookShelf}
                  handleSearchBooks = {this.props.handleSearchBooks}
                  currentShelf = {this.name}
                  />
                  <Shelf name="WantToRead"
                         books = {wantToRead}
                         UpdateBookShelf={UpdateBookShelf}
                         handleSearchBooks = {this.props.handleSearchBooks}
                         currentShelf = {this.name}
                         />
                  <Shelf 
                  name="Read"
                  books = {read}
                  UpdateBookShelf={UpdateBookShelf}
                  handleSearchBooks = {this.props.handleSearchBooks}
                  currentShelf = {this.name}
                  />
            <div className="open-search">
              <Link className="opened-search-button" to="/search">Add a book</Link>
            </div>
            </div>
              </div>
            </div>
        )
    }
}

export default BookLists
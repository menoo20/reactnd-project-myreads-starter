import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import SearchPage from './SearchPage'
import BookLists from './BookLists'
// import Book from './book'
class BooksApp extends Component {
  state = {
    books: [],
    read: [],
    wantToRead: [],
    currentlyReading: [],
   
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(books => this.setState({
      books: books,
      currentlyReading: books.filter(book => book.shelf === 'currentlyReading'),
      read: books.filter(book => book.shelf === 'read'),
      wantToRead: books.filter(book => book.shelf === 'wantToRead')
  }
    )
    )
  }



UpdateBookShelf = (book, shelf)=>{
   BooksAPI.update(book, shelf)
   .then(()=> BooksAPI.getAll()
   .then(books => this.setState({
     books: books,
     currentlyReading: books.filter(book => book.shelf === 'currentlyReading'),
     read: books.filter(book => book.shelf === 'read'),
     wantToRead: books.filter(book => book.shelf === 'wantToRead'),
 }
   ))
  
   )
}

  render() {
   const  {books, read, wantToRead, currentlyReading} = this.state
    return (
      <div className="app">
       <Route exact path="/" render={()=>(
        <BookLists
          books = {books}
          read = {read}
          wantToRead = {wantToRead}
          currentlyReading = {currentlyReading}
          UpdateBookShelf = {this.UpdateBookShelf}
        />
       )}/>
         
       <Route path="/search" render={()=>(
        <SearchPage
          UpdateBookShelf = {this.UpdateBookShelf} allBooks={books}
        />
       )}/>
      </div>
    )
  }
}

export default BooksApp

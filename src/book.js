import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
class Book extends Component {
  state = {
    book: this.props.book,
  }




    render(){
        const {book, UpdateBookShelf, currentShelf} = this.props;
        let smallThumbnail = book.imageLinks? book.imageLinks.smallThumbnail : "";
        let author = book.authors? book.authors.map(bookAuthor => bookAuthor).join('- '): book.author
        return (
            <div className="book">
                        
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${smallThumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select  value={currentShelf} onChange={(e)=>{UpdateBookShelf(this.state.book,e.target.value )}}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{author}</div>
                        </div>
        )
    }
}

export default Book
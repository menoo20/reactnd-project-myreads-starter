import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
class Book extends Component {
  state = {
    book: this.props.book,
    // isShelfed: false,
    // shelf: ''
  }


 
  UpdateSearchedBooks =()=>{
    if(this.props.searchedBook){
    const shelfedBook = this.props.allBooks.filter(oneBook => oneBook.id === this.props.searchedBook.id)
        if(shelfedBook[0]){
          return shelfedBook[0].shelf
        }else{
          return 'none'
        }
      }
      else{return this.props.book.shelf}
  
  }

  smallThumbnail =()=>{
    if(this.props.book){
    let smallThumbnail = this.props.book.imageLinks? this.props.book.imageLinks.smallThumbnail : "";
     return smallThumbnail
   }
   else{let smallThumbnail = this.props.searchedBook.imageLinks? this.props.searchedBook.imageLinks.smallThumbnail : ""; 
       return smallThumbnail
  }
  }

   author = ()=>{
     if(this.props.book){
      let author = this.props.book.authors? this.props.book.authors.map(bookAuthor => bookAuthor).join('- '): this.props.book.author;
      return author
     }else{
      let author = this.props.searchedBook.authors? this.props.searchedBook.authors.map(bookAuthor => bookAuthor).join('- '): this.props.searchedBook.author;
       return author
     }
   }

   title = ()=>{
    if(this.props.book){
     return this.props.book.title
    }else{
      return this.props.searchedBook.title
    }
  }
    render(){
        
        const { UpdateBookShelf, searchedBook} = this.props;
        const {book} = this.state;
        

        
        
        return (
            <div className="book">
                        
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${this.smallThumbnail()})` }}></div>
                            <div className="book-shelf-changer">
                              <select  value={this.UpdateSearchedBooks()} onChange={(e)=>{UpdateBookShelf(book || searchedBook,e.target.value )}}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{this.title()}</div>
                          <div className="book-authors">{this.author()}</div>
                        </div>
        )
    }
}

export default Book
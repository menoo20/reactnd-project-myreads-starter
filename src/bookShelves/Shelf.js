import React, {Component} from 'react'
import Book from '../book'
class Shelf extends Component {

    render() {
      let {name, books , UpdateBookShelf} = this.props
        return (
          <div className="bookshelf">
          <h2 className="bookshelf-title">{name}</h2>
            <div className="bookshelf-books">
              
                    <ol className="books-grid">
                    {books.map((book) => {
                      return (  <li key={book.id}>
                        <Book book={book} UpdateBookShelf = {UpdateBookShelf}
                        currentShelf={book.shelf}
                        />
                      </li>)
                      })}
                    </ol>
                  </div>
                  </div>
        )
    }
}

export default Shelf
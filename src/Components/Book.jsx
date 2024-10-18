import './style.css'
function Book(props){

    return (
        <div className="book-card">
            <img src={props.bookDeatails.coverImageUrl} className="book-cover" alt="" width='200px' height='200px' />
            <div className="book-details">
                <h2 className="book-title">{props.bookDeatails.title}</h2>
                <p className="book-author">{props.bookDeatails.author}</p>
                <p className="book-description">{props.bookDeatails.description}</p>
            </div>
        </div>
    )
}
export default Book;
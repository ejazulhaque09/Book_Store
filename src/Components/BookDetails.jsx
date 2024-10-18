import { useParams } from "react-router-dom";
import { Books } from "../utils/mockData";
function BookDetails() {
  const params = useParams();
  const book = Books.filter((book) => book.id == params.id);

  return (
    <>
      {book.map((book) => {
        return (
          <>
            <h1>BookDetails</h1>
            <h2>{book.title}</h2>
            <h2>{book.description}</h2>
            <img src={book.coverImageUrl} alt="" height="200px" width="200px" />
          </>
        );
      })}
    </>
  );
}
export default BookDetails;

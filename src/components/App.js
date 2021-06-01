import BookForm from '../containers/BookForm';
import BooksList from '../containers/BooksList';

function App() {
  return (
    <div className="mainContainer">
      <BooksList />
      <hr />
      <BookForm />
    </div>
  );
}

export default App;

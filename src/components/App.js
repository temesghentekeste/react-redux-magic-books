import BookForm from '../containers/BookForm';
import BooksList from '../containers/BooksList';

function App() {
  return (
    <div className="mainContainer">
      <BooksList />
      <BookForm />
    </div>
  );
}

export default App;

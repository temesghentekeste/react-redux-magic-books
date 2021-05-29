import BookForm from '../containers/BookForm';
import BooksList from '../containers/BooksList';
import './App.css';

function App() {
  return (
    <div className="mainContainer">
      <BooksList />
      <BookForm />
    </div>
  );
}

export default App;

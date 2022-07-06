import './App.css';
import SongDetails from './components/SongDetails';
import SongsList from './components/SongsList';


function App() {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <h1 style={{ justifyContent: "auto" }}>Songs List</h1>
          <SongsList />
        </div>
        <div className="column eight wide">
          <h1 style={{ justifyContent: "auto" }}>Songs Details</h1>
          <SongDetails />
        </div>
      </div>
    </div>
  );
}

export default App;

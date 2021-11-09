import Row from "./Row"
import './App.css';
import requests from "./requests";

//6a7c39f875322e12549e43b81e1d527d
function App() {
  return (
    <div className="App">
      <h1>Welcome to Netflix</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;

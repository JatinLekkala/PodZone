import Home from './components/home.js';
import PodcastList from './components/PodcastList.js';
import EpisodeList from './components/EpisodeList.js';
import PlaybackControls from './components/PlaybackControls.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home></Home>
        <PodcastList></PodcastList>
        <EpisodeList></EpisodeList>
        <PlaybackControls></PlaybackControls>
      </header>
    </div>
  );
}

export default App;

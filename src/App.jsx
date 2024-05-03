import './App.css';
import AppHeader from './App-header';
import Backlog from './Backlog';
import Ready from './Ready';
import InProgress from './InProgress';
import Finished from './Finished';
import AppFooter from './AppFooter';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main>
        <div className="Container">
          <Backlog />
          <Ready />
          <InProgress />
          <Finished />
        </div>
      </main>
      <AppFooter />
    </div>
  );
}

export default App;

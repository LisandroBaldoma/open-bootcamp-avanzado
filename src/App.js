
import './App.css';
import TaskList from './components/lists/TaskList';
import Settings from './components/settings/Settings';
import Ejercicio1 from './components/ejercicios/Ejercicio1';

function App() {
  return (
    <div className="App">

      <Ejercicio1 />        
      <TaskList />
      {/*<Settings />*/}
    </div>
  );
}

export default App;

import './App.css';
//import LoginFormContainer from './components/containers/LoginFormContainer';
import TodoContainer from './components/containers/TodoContainer';
import TodoFormContainer from './components/containers/TodoFormContainer';
import FilterOptions from './components/pure/FilterOptions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoContainer></TodoContainer>
        <TodoFormContainer></TodoFormContainer>
        <FilterOptions></FilterOptions>
      </header>
      {/* <LoginFormContainer></LoginFormContainer> */}
    </div>
  );
}

export default App;

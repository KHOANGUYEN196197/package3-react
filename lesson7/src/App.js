import logo from './logo.svg';
import './App.css';
import FunctionComponent from './component/functionComponent/FunctionComponent';
import ClassComponent from './component/classComponent/ClassComponent';

function App() {
  return (
    <div className="App">
      <h1>Function Component</h1>
      <FunctionComponent />
      <br /> <br /> <br /> <br />
      <h1>ClassComponent</h1>
      <ClassComponent />
    </div>
  );
}

export default App;

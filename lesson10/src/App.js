import logo from './logo.svg';
import './App.css';
import ClassCompoent from './component/classComponent/ClassComponent';
import FunctionComponent from './component/functionComponent/FunctionComponent';

function App() {
  return (
    <div className="App">
      <ClassCompoent />
      <br /><br /><br /><br />
      <FunctionComponent />
    </div>
  );
}

export default App;

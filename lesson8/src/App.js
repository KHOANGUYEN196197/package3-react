import './App.css';
import { AppProvider } from './context/AppContext';
import ComponentA from './component/ComponentA';
import ComponentB from './component/ComponentB';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <ComponentA />
        <ComponentB />
      </AppProvider>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from "./containers/Header";
import MainSection from "./containers/VisibleTodoList";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
    </div>
  );
}

export default App;

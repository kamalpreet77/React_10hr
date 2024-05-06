import './App.css';
const app = "Hello World!"
const className = "App-header"
function App() {
  return (
    <div className="App">
      <div className={className}>
       {app}
       </div>
    </div>
  );
}
function Demo() {
  return (
    <div className="App">
      <div className={className}>
       Demo
       </div>
    </div>
  );
}

export  {App,Demo};

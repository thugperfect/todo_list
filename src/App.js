import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';

function App() {
  const todo = [
    {
      id:1,
      checked:false,
      item:"Complete ToDO APP"
    },{
      id:2,
      checked:false,
      item:"Optimise Movie_Fetch"
    },{
      id:3,
      checked:false,
      item:"Optimise Java_DSA"
    },{
      id:4,
      checked:false,
      item:"Complete React YT video"
    }
  ]

  return (
    <div className="container mx-auto w-4/5  min-h-[100vh]  bg-black  outline-1 outline-slate-600">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;

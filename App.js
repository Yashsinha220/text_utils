// import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import {TextForm} from './components/Textform';

function App() {
  return (
   <>
   <Navbar title = "TextUtils"/>
   <div className="container">
     <TextForm heading = "Enter the text to analyize"/>
   </div>
   
   </>
  );
}

export default App;

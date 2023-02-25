import './App.css';
import Info from './info';
import Footer from './Footer';
import Nav from '../Homework/Nav';

function App() {

  var name = "Abdulkadir"
  var last = "Maxamed"
  var res = 2*654984352186185684
  var job = "Civil Engineer"

  if (name === "Abdulkadir"){
    job = "Software Engineer"
  }

  return (
    <div className='parent'>
      <div className="App">
        <Nav />
        <header>
          <img src='https://upload.wikimedia.org/wikipedia/commons/9/9e/Ours_brun_parcanimalierpyrenees_1.jpg' alt='bear'/>
          <h2>{name} {last}</h2>
          <figcaption>{job}</figcaption>
          <h6>{name}.com</h6>
          <h5>{res}</h5>
          <ul>
            <li className='Email'><a href='github.com'>Email</a></li>
            <li className='LinkedIn'><a href='github.com' target='_blank'>LinkedIn</a></li>
          </ul>
        </header>
        <Info 
          name="Abdulkadir"
          />
        <Footer />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Button from './components/Button';
import AboutPage from './components/AboutPage';
import ListRender from './components/ListRender';

let isLoggedIn;

let content: any;
if (isLoggedIn) {
  content = <AboutPage />
} else {
  content = <Button />
}

function App() {
  return (
    <div>
      <h1 className='header'>Hello, I just made my first button. Here it is.</h1>
      <Button />
      <AboutPage />
      <br />

      {content} <br />

      <ListRender />
    </div>
  );
}

export default App;

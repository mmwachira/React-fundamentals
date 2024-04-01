import './App.css';
import Button from './components/Button';
import AboutPage from './components/AboutPage';
import ListRender from './components/ListRender';
import Heading from './components/Heading';
import Section from './components/Section';

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
      <Section level={1}>
        <Heading>Title</Heading>
        <Section level={2}>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section level={3}>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Section level={4}>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
      <br />
      
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

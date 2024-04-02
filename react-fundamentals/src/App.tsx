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

 function ProfilePage(){
   return(
     <Section isFancy={''}>
         <Heading>My Profile</Heading>
         <Post
         title="Hello traveller!"
         body="Read about my adventures." 
         />
         <AllPosts />
       </Section>
   )
}

function AllPosts(){
  return (
    <Section isFancy={''}>
      <Heading>Posts</Heading>
      <RecentPosts />
    </Section>
  );
}

function RecentPosts(){
  return (
    <Section isFancy={''}>
      <Heading>Recent Posts</Heading>
      <Post
      title="Flavors of Kenya"
      body="...those Chapatis!" 
      />
      <Post
        title="Buenos Aires in the rhythm of tango"
        body="I loved it!"
       />
    </Section>
  );
}

function Post({ title, body} : {title: any, body: any}) {
  return (
    <Section isFancy={true}>
      <Heading>
        {title}
      </Heading>
      <p><i>{body}</i></p>
    </Section>
  )
}

function App() {

  return (
    <div>

    <Section isFancy={''}>
        <Heading>My Profile</Heading>
        <Post
        title="Hello traveller!"
        body="Read about my adventures." 
        />
        <AllPosts />
      </Section>

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

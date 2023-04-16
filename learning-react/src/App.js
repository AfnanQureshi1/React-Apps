import './App.css';
import PackingList from './components/ConditionalRendering';
import {PackingsList} from './components/ConditionalRendering';

function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function App() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
      <PackingList/>
      <PackingsList/>
    </section>
  );
}


// export default App;

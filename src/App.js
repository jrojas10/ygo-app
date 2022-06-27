
import './App.scss';
import Header from './components/Header/Header';
import Information from './components/Information/Information';
import Footer from './components/Footer/Footer';
import Rules from './components/Rules/Rules';
import Register from './components/Register/Register';
// import { Route } from 'react-router-dom';

function App() {
  return (

    <div className='App'>
      <Header />
      <Information />
      <Rules />
      <Register />
      <Footer />


    </div>


  );
}

export default App;

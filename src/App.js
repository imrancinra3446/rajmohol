
import './App.css';
import MainComponent from './components/MainComponents';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <MainComponent />
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;

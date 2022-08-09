import './App.css';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Particles from './Components/Particles/Particles';
import Section from './Components/Section/Section';
import Services from './Components/Services/Services';
import Team from './Components/Team/Team';

function App() {
  return (
    <div className="App">
      <Particles/>
      <Header/>
      <Section/>
      <Services/>
      <Team/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;

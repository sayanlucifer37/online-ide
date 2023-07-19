import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer';
import GithubCards from './components/GithubCards';
import Ide from './components/Ide';

export function App() {
  
  return (
    <div class="main-wrapper">
      <NavigationBar projectName={'Github Cards'}/> 
      <Ide />
      {/* <GithubCards/> */}
      <Footer />
    </div>
  );
}


export default App;
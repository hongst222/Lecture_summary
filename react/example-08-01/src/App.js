import Navigator from './common/Navigator';
import Header from './common/Header';
import Footer from './common/Footer';
import Main from './pages/Main';

const App = () => {
  return (
    <div id = 'main'>
      <Navigator></Navigator>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;

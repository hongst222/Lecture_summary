import Main from './pages/Main';
import Navbar from './common/Navbar';
import Sidebar from './common/Sidebar';
import SidebarTrigger from './common/SidebarTrigger';
import Blur from './common/Blur';
const App = () => {
  return (
    <div>
      <SidebarTrigger/>
      <Blur/>
      <Sidebar />
      <Navbar />
      <Main />
    </div>
  );
}

export default App;

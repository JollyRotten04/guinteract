import './App.css'
import { useState } from 'react';

// View Components
import LoginSignUp from './components/views/LoginSignUp/LoginSignUp';
import SelectAccountType from './components/views/SelectAccountType/SelectAccountType';

function App() {

  const views = ['LoginSignUp', 'SelectAccountType'];

  const [currentView, setCurrentView] = useState(views[1]);

  const changeView = () => {
    switch (currentView) {
      case 'LoginSignUp':
        return <LoginSignUp />;
  
      case 'SelectAccountType':
        return <SelectAccountType />;

      default:
        return <LoginSignUp />;
    }
  };

  return (
    <div id="superContainer" className='h-screen w-screen bg-[#313131] overflow-hidden'>

      {/* Dynamically Renders View */}
      {changeView()}

    </div>
  )
}

export default App

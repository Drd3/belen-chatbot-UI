import './App.css';
import { ThemeConfig } from './config/themeConfig';
import ChatProvider from './context/chatContext/chatContext';
import ChatBot from './views/chat';

function App() {
  
  return (
    <div className='App'>
      <ThemeConfig>
        <ChatProvider>
          <ChatBot/>
        </ChatProvider>
      </ThemeConfig>
    </div>
  );
}

export default App;

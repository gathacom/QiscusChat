// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './pages/Chat'; // Basic chat interface (Task 3)
import EnhancedChat from './pages/EnhancedChat'; // Enhanced chat interface (Task 5)

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/enhanced-chat" element={<EnhancedChat />} />
      </Routes>
    </Router>
  );
};

export default App;
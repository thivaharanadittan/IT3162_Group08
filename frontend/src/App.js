import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './feedback/CSS/custom.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StickyHeader from './feedback/components/header';
import FeedbackForm from './feedback/components/form';
import Submissions from './feedback/components/submissions'

function App() {
  return (
    
    <div className="App">
      <StickyHeader/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<FeedbackForm/>}/>
        <Route path="submissions" element={<Submissions />} />
        <Route path="submission/:id" element={<Submissions />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;

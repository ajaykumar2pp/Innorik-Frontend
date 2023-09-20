import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PageNotFound from './Pages/PageNotFound'
import NavbarComp from './components/NavbarComp';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Login from './Pages/Login';
import News from './Pages/News';
import InterestSelection from './Pages/InterestSelection';
import NewsFeed from './Pages/NewsFeed';
import ArticleSaving from './Pages/ArticleSaving';
import Article from './Pages/Article';


function App() {
  return (
    <>
     
        <BrowserRouter>
          <NavbarComp />

          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/interests" element={<InterestSelection />} />
            <Route path="/feed" element={<NewsFeed />} />
            <Route path="/save-article" element={<ArticleSaving />} />
            <Route path="/article-recommendations" element={<Article />} />
            <Route path="/add-article" element={<News />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      
    </>
  );
}

export default App;

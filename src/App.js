import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Info from './pages/Info';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog1 from './pages/Blog1';
import Blog2 from './pages/Blog2';
import Blog3 from './pages/Blog3';
import Blog4 from './pages/Blog4';
import Blog5 from './pages/Blog5';

function App() {
  return (
      <div className="App">

        <div className='left-div'>
          <Link className='top' to="/">WINEOFTIME</Link>

          <div className='bottom'>
            <Link to="/">BLOG</Link>
            <Link to="/info">INFO</Link>
            <Link to="/projects">PROJECTS</Link>
            <Link to="/contact">CONTACT</Link>
          </div>
        </div>

        <Routes>
          <Route path="/" element={
            <div className='right-div'>
              <div className='blog_1 blogs'>
                <div className='title'>
                  <Link to='/blog_1' className='blog-title'>Why WINEOFTIME</Link>
                  <p>Sep 17, 2025</p>
                </div>
              </div>

              <div className='blog_2 blogs'>
                <div className='title'>
                  <Link to='/blog_2' className='blog-title'>Weather Apps Don’t Have to Be Boring</Link>
                  <p>Sep 19, 2025</p>
                </div>
              </div>

              <div className='blog_3 blogs'>
                <div className='title'>
                  <Link to='/blog_3' className='blog-title'>So… I Read the Terms So You Don’t Have To</Link>
                  <p>Sep 20, 2025</p>
                </div>
              </div>

              <div className='blog_4 blogs'>
                <div className='title'>
                  <Link to='/blog_4' className='blog-title'>This Portfolio Is My Side Quest</Link>
                  <p>Sep 21, 2025</p>
                </div>
              </div>

              <div className='blog_5 blogs'>
                <div className='title'>
                  <Link to='/blog_5' className='blog-title'>Tailwind Finally Won Me Over</Link>
                  <p>Jul 24, 2026</p>
                </div>
              </div>
            </div>
          } />

          <Route path="/info" element={<Info />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/blog_1" element={<Blog1 />} />
          <Route path="/blog_2" element={<Blog2 />} />
          <Route path="/blog_3" element={<Blog3 />} />
          <Route path="/blog_4" element={<Blog4 />} />
          <Route path="/blog_5" element={<Blog5 />} />

        </Routes>
      </div>
  );
}

export default App;

import './App.css';
// import blog_1 from './images/blog_1.jpg';

function App() {
  return (
    <div className="App">

      <div className='left-div'>

        <a className='top' href='#'> WINEOFTIME</a>

        <div className='bottom'>
          <a href='#'> BLOG </a>
          <a href='#'> INFO </a>
          <a href='#'> PROJECTS </a>
          <a href='#'> CONTACT </a>
        </div>

      </div>

      <div className='right-div'>
        <div className='blog_1 blogs'>
          <div className='title'>
            <a href='#'> Why WINEOFTIME </a>
            <p>Sep 17, 2025</p>
          </div>

        </div>

        <div className='blog_2 blogs'>
          <div className='title'>
            <a href='#'> Weather Apps Don’t Have to Be Boring </a>
            <p>Sep 19, 2025</p>
          </div>
        </div>

        <div className='blog_3 blogs'>
          <div className='title'>
            <a href='#'> So… I Read the Terms So You Don’t Have To </a>
            <p>Sep 20, 2025</p>
          </div>

        </div>

        <div className='blog_3 blogs'>
          <div className='title'>
            <a href='#'> This Portfolio Is My Side Quest </a>
            <p>Sep 21, 2025</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;

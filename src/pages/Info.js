import '../App.css';

function Info() {
  return (
    <div className="right-div info-page">
      <div className="blogs">
        <div className="title">
          <h1>About WINEOFTIME</h1>
          <p>Hi, I’m <strong>Khushi</strong>, and this is <strong>WINEOFTIME</strong> — my personal space to share ideas, experiments, and projects. I love exploring <strong>web development, design, and creative technology</strong>, and this blog is where I document my journey.</p>

          <p>I created WINEOFTIME to:</p>
          <ul>
            <li>Showcase my <strong>projects</strong> and experiments.</li>
            <li>Share insights and <strong>thoughts on technology, design, and productivity</strong>.</li>
            <li>Connect with like-minded creators and learners.</li>
          </ul>

          <h2>Skills & Tools</h2>
          <p>
            <strong>Web Development:</strong> HTML, CSS, JavaScript, React<br />
            <strong>Design & UI/UX:</strong> Figma, Adobe XD<br />
            <strong>Other:</strong> Problem-solving, creative writing, and personal projects
          </p>

          {/* <h2>Contact Me</h2>
          <p>
            Email: <a href="mailto:khushipatil1377@gmail.com" className='link'>khushipatil1377@gmail.com</a><br />
            GitHub: <a href="https://github.com/khu5hii" className='link'>github.com/khu5hii</a><br />
            LinkedIn: <a href="https://www.linkedin.com/in/khushi-patil-03944b385/" className='link'>linkedin.com/in/khushi-patil</a>
          </p> */}

          <h2>Fun Facts / Inspirations</h2>
          <p>
            I enjoy turning <strong>ideas into small web experiments</strong>.<br />
            My favorite part of web development is <strong>designing interfaces that feel alive and interactive</strong>.<br />
            WINEOFTIME is inspired by curiosity, creativity, and the love for learning new things.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;

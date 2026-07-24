import '../App.css';

function Projects() {
  return (
    <div className="right-div projects-page">
      <h1>Projects</h1>
      <div className='title'>
        <div className="project-item">
          <h2>Toonel | HTML, CSS, JavaScript, Node.js</h2>
          <p>I developed Toonel, a black-and-white comic-style website to showcase articles and artwork. One of the key challenges was creating a visually appealing comic layout that works seamlessly on both desktop and mobile screens. I designed a responsive grid system using CSS and implemented interactive elements with JavaScript to enhance user engagement. This project strengthened my front-end development skills and gave me experience in blending creativity with technical implementation, resulting in an immersive platform for content exploration.</p>
          <p>Check it out: <a href="https://toonel.onrender.com" target="_blank" rel="noopener noreferrer">Toonel ↗</a></p>
        </div>

        <div className="project-item">
          <h2>Toscan | JavaScript, OpenAI APIs</h2>
          <p>I developed Toscan, a tool that analyzes Terms of Service documents to assess their user-friendliness. I implemented the OpenAI API key to integrate NLP capabilities, enabling the app to detect unclear, biased, or complex clauses and provide a summary score. A major challenge was handling long legal texts efficiently while maintaining accuracy and readability in the output. This project enhanced my skills in API integration, text analysis, and creating intuitive user interfaces, providing a practical tool that helps users quickly understand legal agreements.</p>
          <p>Check it out: <a href="https://toscan.onrender.com" target="_blank" rel="noopener noreferrer">Toscan ↗</a></p>
        </div>

        <div className="project-item">
          <h2>Retrocast | HTML, CSS, JavaScript, Node.js, Express.js</h2>
          <p>I developed Retrocast, a retro 8-bit style weather application that delivers real-time weather data. The main challenge was integrating WeatherAPI securely with Node.js and Express.js while keeping the retro theme intact. I focused on creating a nostalgic interface with modern functionality, ensuring the app is responsive and accurate. This project improved my back-end integration skills and taught me how to combine aesthetic design with practical features, delivering a weather app that is both fun and functional.</p>
          <p>Check it out: <a href="https://retrocast.onrender.com" target="_blank" rel="noopener noreferrer">Retrocast ↗</a></p>
        </div>

        <div className="project-item">
          <h2>Plannit | React, JavaScript, LocalStorage</h2>
          <p>I developed Plannit, a To-Do List app that allows users to add, complete, and delete tasks. A key challenge was implementing persistent storage so that user tasks are retained across sessions. I used LocalStorage to ensure data persistence while maintaining a clean and intuitive UI. Through this project, I strengthened my understanding of React basics, state management, and user-centric design, creating an efficient productivity tool that is simple yet reliable.</p>
          <p>Check it out: <a href="https://plannitapp.vercel.app" target="_blank" rel="noopener noreferrer">Plannit ↗</a></p>
        </div>

        <div className="project-item">
          <h2>PixelPorter | HTML, CSS, JavaScript</h2>
          <p>I developed PixelPorter, a retro game-inspired portfolio featuring interactive pixel-art elements. The challenge was designing engaging animations and transitions that enhance the user experience without slowing down the site. I implemented hover effects and scroll-based animations with JavaScript and CSS, giving the portfolio a dynamic feel. This project allowed me to merge creativity with technical skills, resulting in a unique showcase of my work that stands out visually and interactively.</p>
          <p>Check it out: <a href="https://pixelporter.vercel.app" target="_blank" rel="noopener noreferrer">PixelPorter ↗</a></p>
        </div>

        <div className="project-item">
          <h2>Medicine Verify & Redistribution | Figma Design</h2>
          <p>designed prototypes for a medicine verification and redistribution system. click below to view the interactive preview.</p>
          <iframe
            title='med'
            src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/kq6jPc9lQMw4HkpuxIaeLh/Medicine-Verify-and-Redistribution?node-id=0-1&p=f&t=1zoOMUCeBTinTewY-0"
            style={{ border: "1px solid #ccc" }}
            width="100%"
            height="500"
            allowFullScreen
          ></iframe>
        </div>



      </div>
    </div>
  );
}

export default Projects;

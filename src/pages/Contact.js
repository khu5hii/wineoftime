import '../App.css';

function Contact() {
  return (
    <div className="right-div contact-page">
      <div className="title">
        <h2>Contact Me</h2>

        <p>
          I’d love to hear from you! Whether you have a question about my work, 
          are exploring opportunities to collaborate, or simply want to say hello, 
          I’m always happy to connect.
        </p>

        <p>
          You can reach me through the contact form on my website or drop me an email at{' '}
          <a href="mailto:khushipatil1377@gmail.com" className="link">
            khushipatil1377@gmail.com
          </a>.
          <br />
          I do my best to respond to all messages within 48 hours.
        </p>

        <p>
          Stay connected for updates on my latest projects, insights, and news:
          <br />
          GitHub:{' '}
          <a href="https://github.com/khu5hii" className="link">
            github.com/khu5hii
          </a>
          <br />
          LinkedIn:{' '}
          <a href="https://www.linkedin.com/in/khushi-patil-03944b385/" className="link">
            linkedin.com/in/khushi-patil
          </a>
        </p>

        <p>
          Thank you for your interest and support—I look forward to connecting with you 
          and discovering how we can create something meaningful together.
        </p>
      </div>
    </div>
  );
}

export default Contact;

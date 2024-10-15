import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';
import './Skills.css'; 

function Skills() {
  return (
    <div>
        <h2>My Skills</h2>
        
      <div className="skill-main-content">
      

        <Card>
        <img src="https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/javascript-512.png" alt="JavaScript Logo" className="card-logo" />
          <Card.Header>1. JavaScript</Card.Header>
          <Card.Body>
            
            <Card.Title>
              <ProgressBar now={20} label={`${20}%`} className="dark-grey" />
            </Card.Title>
            <Card.Text>
              JavaScript is relatively new to me, so my progress is currently at 20%. I'm working hard to build my skills in this language.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
        <img src="https://www.svgrepo.com/show/303251/mysql-logo.svg" alt="MySQL Logo" className="card-logo" />
          <Card.Header>2. MySQL</Card.Header>
          <Card.Body>
            <Card.Title>
              <ProgressBar now={70} label={`${70}%`} className="dark-grey" />
            </Card.Title>
            <Card.Text>
              I understood basic SQL commands and it was quite easy to the point that i was able to memorize it.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
        <img src="https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/html-512.png" alt="HTML Logo" className="card-logo" />
          <Card.Header>3. HTML</Card.Header>
          <Card.Body>
            <Card.Title>
              <ProgressBar now={35} label={`${35}%`} className="dark-grey" />
            </Card.Title>
            <Card.Text>
              I've been using HTML for a while, but my progress is at 35% as I’m still working on memorizing its syntax.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
        <img src="https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/css-512.png" alt="CSS Logo" className="card-logo" />
          <Card.Header>4. CSS</Card.Header>
          <Card.Body>
            <Card.Title>
              <ProgressBar now={45} label={`${45}%`} className="dark-grey" />
            </Card.Title>
            <Card.Text>
              I started using CSS with HTML, and I find it easier to memorize. However, I’m still improving in this area.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-php-99-1175127.png?f=webp" alt="PHP Logo" className="card-logo" />
          <Card.Header>5. PHP</Card.Header>
          <Card.Body>
            <Card.Title>
              <ProgressBar now={52} label={`${52}%`} className="dark-grey" />
            </Card.Title>
            <Card.Text>
              I began learning PHP after HTML and CSS, and I’m comfortable with its basics, which puts my progress at 52%.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
        <img src="https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/python-512.png" alt="Python Logo" className="card-logo" />
          <Card.Header>6. Python</Card.Header>
          <Card.Body>
            <Card.Title>
              <ProgressBar now={33} label={`${33}%`} className="dark-grey" />
            </Card.Title>
            <Card.Text>
              Python was my first language, but my progress is low since I haven’t used it for years.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
        <img src="https://www.scorchsoft.com/public/capabilities/head/react-native-logo-square.webp" alt="React Logo" className="card-logo" />
          <Card.Header>7. React</Card.Header>
          <Card.Body>
            <Card.Title>
              <ProgressBar now={28} label={`${28}%`} className="dark-grey" />
            </Card.Title>
            <Card.Text>
              I’m currently learning React, and I’m surprised by how much it simplifies frontend development.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
        <img src="https://www.rapidbrains.com/assets/img/services/rapidbrains-laravel.webp" alt="React Logo" className="card-logo" />
          <Card.Header>8. Laravel</Card.Header>
          <Card.Body>
            <Card.Title>
              <ProgressBar now={3} label={`${3}%`} className="dark-grey" />
            </Card.Title>
            <Card.Text>
              Laravel is new to me, and I’m learning it for both personal and school projects. My knowledge is limited at the moment.
            </Card.Text>
          </Card.Body>
        </Card>

        
      </div>
    </div>
  );
}

export default Skills;

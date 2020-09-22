import React, { Component } from 'react';
import './App.scss';
import avatar from './assets/avatar.jpg';
import Education from './components/Education';

class App extends Component {
  constructor() {
    super();
    this.state = {
      education: [
        {
          year: 1990,
          name: 'I was born in Katowice',
          dec:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.',
        },
        {
          year: 2005,
          name: 'Secondary school specializing in artistic',
          dec:
            'Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam quis voluptatibus.',
        },
        {
          year: 2009,
          name: 'First level graduation in Graphic Design',
          dec:
            'Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis? lusto, quibusdam asperiores unde repellat.',
        },
        {
          year: 2012,
          name: 'Second level graduation in Graphic Design',
          dec: 'Ducimus, aliquam tempore autem itaque et accusantium!',
        },
      ],
    };
  }

  render() {
    return (
      <main className="app">
        <div className="header">
          <div className="avater">
            <img src={avatar} alt="img" />
          </div>
          <h1>hello,</h1>
          <h1>my name is kamil 24yo and this is my resume/cv</h1>
        </div>
        <div className="content">
          <h3>about me</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus, non, dolorem, cumque distinctio magni quam expedita
            velit laborum sunt amet facere tempora ut fuga aliquam ad asperiores
            voluptatem dolorum! Quasi.
          </p>
          <h3>education</h3>
          {this.state.education.map((edu, index) => (
            <Education
              year={edu.year}
              name={edu.name}
              dec={edu.dec}
              key={index}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;

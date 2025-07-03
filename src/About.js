import React from 'react';

function getImagePath(filename) {
  return process.env.PUBLIC_URL + '/images/' + filename;
}

function About() {
  return (
    <div>


      <main className="about">
        <h1 className="about-title">About In-N-Out Burger</h1>
        <p>
          In-N-Out Burger is a regional chain of fast food restaurants with locations
          primarily in California and the Southwest. Founded in 1948, it is known for
          its simple menu, fresh ingredients, and commitment to quality. It is also
          extremely affordable compared to other fast food chains and is best known
          for its Double-Double.
        </p>

        <div className="about-container">
          <div className="about-image-block">
            <img
              src={getImagePath('first.jpeg')}
              alt="First In-N-Out Restaurant"
              className="about-image-block img"
            />
            <p>This is the first restaurant of In-N-Out.</p>
          </div>

          <div className="about-image-block">
            <img
              src={getImagePath('second.webp')}
              alt="Current Owner of In-N-Out"
              className="about-image-block img"
            />
            <p>This is the current owner of In-N-Out.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;



var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built on React. I have built this for a course.</p>
      <p>Here are some of the tools I've used:</p>
      <ul>
        <li><a href="https://facebook.github.io/react">React</a> - This was the javascript framework used.</li>
        <li><a href="http://openweathermap.org">Open Weather Map</a> - I used OWM to search for weather data by city name.</li>
      </ul>
    </div>
  )
};

module.exports = About;

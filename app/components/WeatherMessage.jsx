var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    return (
      <div>
        <h2>It is 40 in Philadelphia</h2>
      </div>
    );
  }
});

module.exports = WeatherMessage;

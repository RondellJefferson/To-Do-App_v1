
exports.getTheDate = function() {
  const today = new Date();
  const currentDay = today.getDay();
  var day = "";

  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'};
  return today.toLocaleString('en-US', options);
}

exports.getTheDay = function() {
  const today = new Date();
  const currentDay = today.getDay();
  var day = "";

  const options = { weekday: 'long'};
  return today.toLocaleString('en-US', options);

}

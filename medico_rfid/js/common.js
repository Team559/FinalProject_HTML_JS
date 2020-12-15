const URL = "http://34.125.217.25:4881";
const displayContainer = $("#result-display");

function emptyContainer() {
  // var container = $("#result-display");
  displayContainer.empty();
}

function fillContainer(data) {
  // var container = $("#result-display");
  displayContainer.append(data);
}

var webdriver = require("selenium-webdriver");
var url = "http://localhost:8000";

var World = function() {
  this.driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.firefox())
    .build();
};

module.exports = World;

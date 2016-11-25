var AzureNotifications = require("nativescript-azure-notifications").AzureNotifications;
var azureNotifications = new AzureNotifications();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("functionname", function() {
  it("exists", function() {
    expect(azureNotifications.functionname).toBeDefined();
  });

  it("returns a promise", function() {
    expect(azureNotifications.functionname()).toEqual(jasmine.any(Promise));
  });
});
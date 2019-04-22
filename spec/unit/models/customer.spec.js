// Jasmine provides the describe method
// Argument 1 gives a short description to the tested feature
// Argument 2 is a function that executes its expectations

// it is used for expectations

// note path to find models - up to models & unit & spec & root 

const Model = require('../../../models/customer.js')

describe("Test customer model", function() {

    it("creates a new model with default values", function() {
      const item = new Model();
      expect(item.zip).toBe('64468');
      expect(item.state).toBe('MO');
      });

});
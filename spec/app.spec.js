// Jasmine provides the describe method
// Argument 1 gives a short description to the tested feature
// Argument 2 is a function that executes its expectations

// it is used for expectations

var request = require("request");

const base_url = "http://localhost:8089/"

describe("App server", () => {

  describe("GET /", () => {
    it("returns status code 200", () => {
      request.get(base_url, (error, response, body) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });

  describe("GET /customer", () => {
    it("returns status code 200", () => {
      request.get(base_url, (error, response, body) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });

  describe("GET /order", () => {
    it("returns status code 200", () => {
      request.get(base_url, (error, response, body) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });

  describe("GET /product", () => {
    it("returns status code 200", () => {
      request.get(base_url, (error, response, body) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });

  describe("GET /xyz2gf", () => {
    it("returns status code 404", () => {
      request.get(base_url, (error, response, body) => {
        expect(response.statusCode).toBe(404);
        done();
      });
    });
  });


});
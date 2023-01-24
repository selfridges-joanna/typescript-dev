"use strict";
exports.__esModule = true;
var movie_rental_1 = require("../src/movie-rental");
var data_1 = require("../src/data");
describe("Movie Rental should", function () {
    it("returns the correct rental record statement", function () {
        var customerStatement = (0, movie_rental_1.returnCustomerRentalStatement)(data_1.customers[0], data_1.movies);
        expect(customerStatement).toBe("Rental Record for Martin [ movie title: Ran, amount: 3.5] [ movie title: The Matrix, amount: 2] Amount owed is: 5.5. Customer earned: 2 frequent renter points.");
    });
});

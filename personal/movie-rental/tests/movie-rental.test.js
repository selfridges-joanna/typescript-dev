"use strict";
exports.__esModule = true;
var movie_rental_1 = require("../src/movie-rental");
var data_1 = require("../src/data");
var refactor_1 = require("../src/refactor");
describe("Movie Rental should", function () {
    it("returns the correct rental record statement", function () {
        var customerStatement = (0, movie_rental_1.returnCustomerRentalStatement)(data_1.customers[0], data_1.movies);
        expect(customerStatement).toBe("Rental Record for Martin [ movie title: Ran, amount: 3.5] [ movie title: The Matrix, amount: 2] Amount owed is: 5.5. Customer earned: 2 frequent renter points.");
    });
});
//refactored tests
describe('Check the amount', function () {
    it('returns the amount', function () {
        var newAmount = (0, refactor_1.ReturnAmount)('new', 2);
        expect(newAmount).toEqual(6);
    });
});
// this is a way to write multicase of 1 test.
describe('Check the amount', function () {
    it.each([
        ['regular', 1, 2],
        ['childrens', 3, 1.5],
        ['new', 0, 0],
        ['childrens', 10, 12],
        ['regular', 0, 2]
    ])('return the amount', function (movieCode, days, expected) {
        expect((0, refactor_1.ReturnAmount)(movieCode, days)).toEqual(expected);
    });
});
describe('is movieCode correct', function () {
    it.each([
        ['regular', 'regular'],
        ['new', 'new'],
        ['childrens', 'childrens'],
    ])('return the expected case', function (movieCode, expected) {
        expect(movieCode).toBe(expected);
    });
});
describe('a new customer will get a point if rents a movie and if it is more than 2days, will get +2', function () {
    it.each([
        ['new', 2, 1],
        ['new', 0, 1],
        ['new', 5, 2],
    ])('add point for a new user and more than 2days', function (movieCode, days, expected) {
        expect((0, refactor_1.FrequentRentPoints)(movieCode, days)).toEqual(expected);
    });
});
describe('any customer will get a point if \
  if a new rents a movie for more than 2days, will get +2', function () {
    it.each([
        ['childrens', 2, 1],
        ['childrens', 15, 1],
        ['regular', 0, 1],
        ['regular', 10, 1],
        ['new', 5, 2],
    ])('add point for a new user and more than 2days', function (movieCode, days, expected) {
        expect((0, refactor_1.FrequentRentPoints)(movieCode, days)).toEqual(expected);
    });
});
describe("Movie Rental should", function () {
    it("returns the correct rental record statement", function () {
        var customerStatement = (0, refactor_1.PrintResult)(data_1.customers[0], data_1.movies);
        expect(customerStatement).toBe("Rental Record for Martin [ movie title: Ran, amount: 3.5] [ movie title: The Matrix, amount: 2] Amount owed is: 5.5. Customer earned: 2 frequent renter points.");
    });
});

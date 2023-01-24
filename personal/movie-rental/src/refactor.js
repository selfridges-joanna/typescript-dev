"use strict";
exports.__esModule = true;
exports.PrintResult = exports.FrequentRentPoints = exports.ReturnAmount = void 0;
function ReturnAmount(movieCode, days) {
    var thisAmount = 0;
    switch (movieCode) {
        case "regular":
            thisAmount = 2;
            if (days > 2) {
                thisAmount += (days - 2) * 1.5;
            }
            break;
        case "new":
            thisAmount = days * 3;
            break;
        case "childrens":
            thisAmount = 1.5;
            if (days > 3) {
                thisAmount += (days - 3) * 1.5;
            }
            break;
    }
    return thisAmount;
}
exports.ReturnAmount = ReturnAmount;
function FrequentRentPoints(movieCode, days) {
    var frequentRenterPoints = 0;
    //add frequent renter points
    frequentRenterPoints++;
    // add bonus for a two day new release rental
    if (movieCode === "new" && days > 2)
        frequentRenterPoints++;
    return frequentRenterPoints;
}
exports.FrequentRentPoints = FrequentRentPoints;
function PrintResult(customer, movies) {
    var totalAmount = 0;
    var frequentRenterPoints = 0;
    var result = "Rental Record for ".concat(customer.name, " ");
    for (var _i = 0, _a = customer.rentals; _i < _a.length; _i++) {
        var r = _a[_i];
        var movie = movies[r.movieID];
        var thisAmount = 0;
        console.log();
        //add frequent renter points
        thisAmount += ReturnAmount(movie.code, r.days);
        frequentRenterPoints += FrequentRentPoints(movie.code, r.days);
        //print figures for this rental
        result += "[ movie title: ".concat(movie.title, ", amount: ").concat(thisAmount, "] ");
        totalAmount += thisAmount;
    }
    // add footer lines
    result += "Amount owed is: ".concat(totalAmount, ". ");
    result += "Customer earned: ".concat(frequentRenterPoints, " frequent renter points.");
    return result;
}
exports.PrintResult = PrintResult;

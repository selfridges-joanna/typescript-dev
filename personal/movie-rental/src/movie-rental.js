"use strict";
exports.__esModule = true;
exports.returnCustomerRentalStatement = void 0;
function returnCustomerRentalStatement(customer, movies) {
    var totalAmount = 0;
    var frequentRenterPoints = 0;
    var result = "Rental Record for ".concat(customer.name, " ");
    for (var _i = 0, _a = customer.rentals; _i < _a.length; _i++) {
        var r = _a[_i];
        var movie = movies[r.movieID];
        var thisAmount = 0;
        // determine amount for each movie
        switch (movie.code) {
            case "regular":
                thisAmount = 2;
                if (r.days > 2) {
                    thisAmount += (r.days - 2) * 1.5;
                }
                break;
            case "new":
                thisAmount = r.days * 3;
                break;
            case "childrens":
                thisAmount = 1.5;
                if (r.days > 3) {
                    thisAmount += (r.days - 3) * 1.5;
                }
                break;
        }
        //add frequent renter points
        frequentRenterPoints++;
        // add bonus for a two day new release rental
        if (movie.code === "new" && r.days > 2)
            frequentRenterPoints++;
        //print figures for this rental
        result += "[ movie title: ".concat(movie.title, ", amount: ").concat(thisAmount, "] ");
        totalAmount += thisAmount;
    }
    // add footer lines
    result += "Amount owed is: ".concat(totalAmount, ". ");
    result += "Customer earned: ".concat(frequentRenterPoints, " frequent renter points.");
    return result;
}
exports.returnCustomerRentalStatement = returnCustomerRentalStatement;

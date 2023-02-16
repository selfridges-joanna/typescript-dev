import { customers, movies } from "./data";


export function ReturnAmount(movieCode: string, days: number): number {
    let thisAmount = 0;
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

export function FrequentRentPoints(movieCode, days) {
  let frequentRenterPoints = 0;
  //add frequent renter points
  frequentRenterPoints++;
  // add bonus for a two day new release rental
  if (movieCode === "new" && days > 2) frequentRenterPoints++;
return frequentRenterPoints;

}

export function returnCustomerRentalStatement(customer, movies) {

    let totalAmount = 0;
    let frequentRenterPoints = 0;
    let result = `Rental Record for ${customer.name} `;
    
    for (let r of customer.rentals) {
      let movie = movies[r.movieID];
      let thisAmount = 0;
      console.log()
      //add frequent renter points
      thisAmount += ReturnAmount(movie.code, r.days)
      frequentRenterPoints += FrequentRentPoints(movie.code, r.days);
      //print figures for this rental
      result += `[ movie title: ${movie.title}, amount: ${thisAmount}] `;
      totalAmount += thisAmount;
    }
    // add footer lines
    result += `Amount owed is: ${totalAmount}. `;
    result += `Customer earned: ${frequentRenterPoints} frequent renter points.`;

  return result;
}

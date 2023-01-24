import {returnCustomerRentalStatement} from '../src/movie-rental'
import { customers, movies } from '../src/data'
import { ReturnAmount, FrequentRentPoints, PrintResult } from '../src/refactor'


describe("Movie Rental should", () => {
    it("returns the correct rental record statement", () => {

      const customerStatement = returnCustomerRentalStatement(customers[0], movies);
      expect(customerStatement).toBe("Rental Record for Martin [ movie title: Ran, amount: 3.5] [ movie title: The Matrix, amount: 2] Amount owed is: 5.5. Customer earned: 2 frequent renter points.");

    })
  });

  //refactored tests

  describe('Check the amount', () => {
    it('returns the amount', () => {

      const newAmount = ReturnAmount('new', 2)
      expect(newAmount).toEqual(6)
    })
  })

  // this is a way to write multicase of 1 test.
  describe('Check the amount', () => {
    it.each([
      ['regular', 1, 2],
      ['childrens', 3, 1.5],
      ['new', 0, 0],
      ['childrens', 10, 12],
      ['regular', 0, 2]
    ]) (
      'return the amount', (movieCode, days, expected) => {
        expect(ReturnAmount(movieCode, days)).toEqual(expected)
      },
      );
  });

  describe('is movieCode correct', () => {
    it.each([
      ['regular', 'regular'],
      ['new', 'new'],
      ['childrens', 'childrens'],
    ])(
      'return the expected case', (movieCode, expected) => {
        expect(movieCode).toBe(expected)
      },
    );
  });

  describe('a new customer will get a point if rents a movie and if it is more than 2days, will get +2', () => {
    it.each([
      ['new', 2, 1],
      ['new', 0, 1],
      ['new', 5, 2],
    ]) (
      'add point for a new user and more than 2days', (movieCode, days, expected) => {
        expect(FrequentRentPoints(movieCode, days)).toEqual(expected)
      }
    )
  })

  describe('any customer will get a point if \
  if a new rents a movie for more than 2days, will get +2', () => {
    it.each([
      ['childrens', 2, 1],
      ['childrens', 15, 1],
      ['regular', 0, 1],
      ['regular', 10, 1],
      ['new', 5, 2],
    ]) (
      'add point for a new user and more than 2days', (movieCode, days, expected) => {
        expect(FrequentRentPoints(movieCode, days)).toEqual(expected)
      }
    )
  })


  describe("Movie Rental should", () => {
    it("returns the correct rental record statement", () => {

      const customerStatement = PrintResult(customers[0], movies);
      expect(customerStatement).toBe("Rental Record for Martin [ movie title: Ran, amount: 3.5] [ movie title: The Matrix, amount: 2] Amount owed is: 5.5. Customer earned: 2 frequent renter points.");

    })
  });
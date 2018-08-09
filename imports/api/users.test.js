import expect from "expect";

import { validateNewUser } from "../imports/api/users";

describe("users", function() {
  it("should allow valid email address", function() {
    const testUser = {
      emails: [
        {
          address: "test@me.com"
        }
      ]
    };

    const res = validateNewUser(testUser);
    expect(res).toBe(true);
  });

  it("should reject invalid email", function() {
    const testUser = {
      emails: [
        {
          address: "test"
        }
      ]
    };
    expect(() => {
      validateNewUser(testUser);
    }).toThrow();
  });
});

// const add = (a, b) => {
//   if (typeof b !== "number") {
//     return a + a;
//   }
//   return a + b;
// };

// const square = a => a * a;

// describe("add", function() {
//   it("should add two numbers", function() {
//     const res = add(9, 5);

//     if (res !== 14) {
//       throw new Error("Sum was not equal to expected value");
//     }
//   });

//   it("should double a single number", function() {
//     const res = add(9);

//     if (res !== 18) {
//       throw new Error("Number was not doubled");
//     }
//   });
// });

// describe("square", function() {
//   it("should square a number", function() {
//     const res = square(9);

//     if (res !== 81) {
//       throw new Error("Number was not square");
//     }
//   });
// });

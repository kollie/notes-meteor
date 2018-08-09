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

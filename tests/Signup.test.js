import { Meteor } from "meteor/meteor";
import React from "react";
import expect from "expect";
import { mount } from "enzyme";

import { Signup } from "../imports/ui/Signup";
import { wrap } from "module";
import { fchown } from "fs";

if (Meteor.isClient) {
  describe("Signup", function() {
    it("should show error messages", function() {
      const error = "This is not working";
      const wrapper = mount(<Signup createUser={() => {}} />);

      wrapper.setState({ error });

      const actualError = wrapper.find("p").text();

      expect(actualError).toBe(error);

      wrapper.setState({ error: "" });
      expect(wrapper.find("p").length).toBe(0);
    });

    it("should call createUser with the form data", function() {
      const email = "test@me.com";
      const password = "password123";
      const spy = expect.createSpy();
      const wrapper = mount(<Signup createUser={spy} />);

      wrapper.ref("email").node.value = email;
      wrapper.ref("password").node.value = password;
      wrapper.find("form").simulate("submit");

      expect(spy.calls[0].arguments[0]).toEqual({ email, password });
    });

    it("should set error if short password", function() {
      const email = "test@me.com";
      const password = "pass";
      const spy = expect.createSpy();
      const wrapper = mount(<Signup createUser={spy} />);

      wrapper.ref("email").node.value = email;
      wrapper.ref("password").node.value = password;
      wrapper.find("form").simulate("submit");

      expect(wrapper.state("error").length).toBeGreaterThan(0);
    });

    it("should call createUser callback error", function() {
      const password = "password123!";
      const reason = "this is the reason";
      const spy = expect.createSpy();
      const wrapper = mount(<Signup createUser={spy} />);

      wrapper.ref("password").node.value = password;
      wrapper.find("form").simulate("submit");

      spy.calls[0].arguments[1]({ reason });
      expect(wrapper.state("error")).toBe(reason);

      spy.calls[0].arguments[1]();
      expect(wrapper.state("error").length).toBe(0);
    });
  });
}

import React from "react";
import expect from "expect";
import { Meteor } from "meteor/meteor";
import { mount } from "enzyme";

import NoteListItem from "../imports/ui/NoteListItem";

if (Meteor.isClient) {
  describe("NoteListItem", function() {
    it("should title and timestamp", function() {
      const title = "New title";
      const updatedAt = 1533849468073;
      const wrapper = mount(<NoteListItem note={{ title, updatedAt }} />);

      expect(wrapper.find("h5").text()).toBe(title);
      expect(wrapper.find("p").text()).toBe("8/09/18");
    });

    it("should set default if no title set", function() {
      const title = "";
      const updatedAt = 1533849468073;
      const wrapper = mount(<NoteListItem note={{ title, updatedAt }} />);

      expect(wrapper.find("h5").text()).toBe("Untitled Note");
    });
  });
}

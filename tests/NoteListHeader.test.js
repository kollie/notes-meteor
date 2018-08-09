import React from "react";
import expect from "expect";
import { Meteor } from "meteor/meteor";
import { mount } from "enzyme";

import NoteListHeader from "../imports/ui/NoteListHeader";

describe("NoteListHeader", function() {
  it("should call meteorCall on click", function() {
    const spy = expect.createSpy();
    const wrapper = mount(<NoteListHeader meteorCall={spy} />);

    wrapper.find("button").simulate("click");
    expect(spy).toHaveBeenCalledWith("notes.insert");
  });
});

import React from "react";
import { mount } from 'enzyme';
import PlayersGrid from '../playersGrid'

describe("PlayersGrid", () => {
  let props;
  let mountedPlayersGrid;
  const playersGrid = () => {
    if (!mountedPlayersGrid) {
      mountedPlayersGrid = mount(
        <PlayersGrid {...props} />
      );
    }
    return mountedPlayersGrid;
  }

  beforeEach(() => {
    props = {
      data: undefined,
      resetFilters: jest.fn()
    };
    mountedPlayersGrid = undefined;
  });

  it("Always renders <table>", () => {
    const table = playersGrid().find("table");
    expect(table.length).toBeGreaterThan(0);
  });

  it("Always renders table head & items", () => {
    const thead = playersGrid().find("thead");
    const th = playersGrid().find("thead tr.head th");
    expect(thead.length).toBeGreaterThan(0);
    expect(th.length).toBe(4);
  });

});

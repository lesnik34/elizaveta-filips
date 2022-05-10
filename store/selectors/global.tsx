import { TStoreState } from "@store/.";

export const headerSelector = (state: TStoreState) =>
  state.global.isHeaderVisible;

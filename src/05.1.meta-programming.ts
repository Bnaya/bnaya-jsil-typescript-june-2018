import { ICreativeData } from "./interfaces";

// lets explore the querySelector types!
// extensive use of overloading, string literal types, and types mapping

const htmlDivElement = document.querySelector("div");
const customElement = document.querySelector("bla");
const svg = document.querySelector("line");

const htmlDivElementWithClass = document.querySelector(
  "div.with-class" as "div"
);

// this is also possible
export type Network = ICreativeData["creative_network"];

// interesting use case for conditioanl mapped types
// https://github.com/hirezio/jasmine-auto-spies/pull/4/files#diff-bbe418fe74eac128ef439d77e500439c

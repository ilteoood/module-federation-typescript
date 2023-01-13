"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/button/index.ts
var button_exports = {};
__export(button_exports, {
  Inner: () => Inner_default,
  default: () => button_default
});
module.exports = __toCommonJS(button_exports);

// src/components/button/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = ({ onClick }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { onClick });
var Button_default = Button;

// src/components/button/Inner/Inner.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var InnerButton = ({ onClick }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { onClick });
var Inner_default = InnerButton;

// src/components/button/index.ts
var button_default = Button_default;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Inner
});

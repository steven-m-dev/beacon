"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCollapsibleHeaderText = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledCollapsibleHeaderText = _styledComponents["default"].span.withConfig({
  displayName: "StyledCollapsibleHeaderText",
  componentId: "sc-pbudop-0"
})(["font-family:", ";font-weight:", ";font-size:", ";margin-right:", ";"], (0, _beaconStyling.getFontFamily)("base"), (0, _beaconStyling.getFontWeight)("regular"), (0, _beaconStyling.getFontSize)("body", "sm"), (0, _beaconStyling.getSpacing)("xs"));

exports.StyledCollapsibleHeaderText = StyledCollapsibleHeaderText;
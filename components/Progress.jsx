"use strict";

function _interopDefault(ex) {
  return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}

var React = require("react");
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require("prop-types"));

var SemiCircleProgress = function SemiCircleProgress(_ref) {
  var _ref$stroke = _ref.stroke,
    stroke = _ref$stroke === undefined ? "#02B732" : _ref$stroke,
    _ref$strokeWidth = _ref.strokeWidth,
    strokeWidth = _ref$strokeWidth === undefined ? 10 : _ref$strokeWidth,
    _ref$background = _ref.background,
    background = _ref$background === undefined ? "#D0D0CE" : _ref$background,
    _ref$diameter = _ref.diameter,
    diameter = _ref$diameter === undefined ? 200 : _ref$diameter,
    _ref$orientation = _ref.orientation,
    orientation = _ref$orientation === undefined ? "up" : _ref$orientation,
    _ref$direction = _ref.direction,
    direction = _ref$direction === undefined ? "right" : _ref$direction,
    _ref$showPercentValue = _ref.showPercentValue,
    showPercentValue =
      _ref$showPercentValue === undefined ? false : _ref$showPercentValue,
    percentage = _ref.percentage;

  var coordinateForCircle = diameter / 2;
  var radius = (diameter - 2 * strokeWidth) / 2;
  var circumference = Math.PI * radius;

  var percentageValue = void 0;
  if (percentage > 100) {
    percentageValue = 100;
  } else if (percentage < 0) {
    percentageValue = 0;
  } else {
    percentageValue = percentage;
  }
  var semiCirclePercentage = percentageValue * (circumference / 100);

  var rotation = void 0;
  if (orientation === "down") {
    if (direction === "left") {
      rotation = "rotate(180deg) rotateY(180deg)";
    } else {
      rotation = "rotate(180deg)";
    }
  } else {
    if (direction === "right") {
      rotation = "rotateY(180deg)";
    }
  }

  return React__default.createElement(
    "div",
    { className: "semicircle-container", style: { position: "relative" } },
    React__default.createElement(
      "svg",
      {
        width: diameter,
        height: diameter / 2,
        style: { transform: rotation, overflow: "hidden" },
      },
      React__default.createElement("circle", {
        cx: coordinateForCircle,
        cy: coordinateForCircle,
        r: radius,
        fill: "none",
        stroke: background,
        strokeWidth: strokeWidth,
        strokeDasharray: circumference,
        style: {
          strokeDashoffset: circumference,
        },
      }),
      React__default.createElement("circle", {
        cx: coordinateForCircle,
        cy: coordinateForCircle,
        r: radius,
        fill: "none",
        stroke: stroke,
        strokeWidth: strokeWidth,
        strokeDasharray: circumference,
        style: {
          strokeDashoffset: semiCirclePercentage,
          transition:
            "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s",
        },
      })
    ),
    showPercentValue &&
      React__default.createElement(
        "span",
        {
          className: "semicircle-percent-value",
          style: {
            width: "100%",
            left: "0",
            textAlign: "center",
            bottom: orientation === "down" ? "auto" : "0",
            position: "absolute",
          },
        },
        percentage,
        "%"
      )
  );
};

function percentageValidation(isRequired) {
  return function (props, propName, componentName) {
    var prop = props[propName];
    if (prop == null) {
      if (isRequired) {
        throw new Error("Percentage is a required prop.");
      }
    } else {
      if (typeof prop !== "number") {
        return new Error(
          "Invalid percentage. Must be a number between 0 and 100."
        );
      }
      if (props[propName] < 0 || props[propName] > 100) {
        return new Error(
          "Invalid percentage. Must be a number between 0 and 100."
        );
      }
    }
  };
}

var percentageisRequired = percentageValidation(true);

SemiCircleProgress.propTypes = {
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
  background: PropTypes.string,
  diameter: PropTypes.number,
  orientation: PropTypes.oneOf(["up", "down"]),
  direction: PropTypes.oneOf(["left", "right"]),
  showPercentValue: PropTypes.bool,
  percentage: percentageisRequired,
};

module.exports = SemiCircleProgress;

var React = require('react');
var PropTypes = React.PropTypes;

var BasePropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.object
]).isRequired;

exports.PropType = PropTypes.objectOf(BasePropType);
exports.PropType.only = function (keys) {
  var shape = {};

  for (var i = 0; i < keys.length; i++) {
    shape[keys[i]] = BasePropType;
  }

  return PropTypes.shape(shape);
};

exports.getStyles = function (styles) {
  var result = {};
  var val;

  for (var key in styles) {
    if (styles.hasOwnProperty(key)) {
      val = styles[key];
      result[key] = typeof val === 'string' ? {className: val} : {style: val};
    }
  }

  return result;
};

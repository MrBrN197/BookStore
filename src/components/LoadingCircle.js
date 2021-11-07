import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const pathTransitionStyle = {
  transition: 'all 200ms ease-in',
};

const Arc = ({
  completed,
  strokeWidth: sw,
  stroke,
  strokeOpacity,
  fill,
}) => {
  const strokeWidth = sw || 4;

  const path = `
  M ${strokeWidth} 50
  A 1 1 0 0 1 ${96 - strokeWidth} 50
  A 1 1 0 0 1 ${strokeWidth} 50
  `;

  const dashed = Math.min(1, Math.max(0, completed));
  const spaced = 1 - dashed;

  return (
    <path
      fill={fill}
      strokeOpacity={strokeOpacity}
      style={pathTransitionStyle}
      d={path}
      stroke={stroke || 'currentColor'}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeDasharray={`${dashed} ${spaced}`}
      strokeDashoffset="-0.25"
      pathLength="1"
    />
  );
};

Arc.defaultProps = {
  stroke: null,
  fill: 'none',
  strokeOpacity: 1,
};

Arc.propTypes = {
  completed: PropTypes.number.isRequired,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeOpacity: PropTypes.number,
};

const Circle = ({
  value,
  className,
  strokeWidth,
}) => (
  <div className={className}>
    <svg
      preserveAspectRatio="xMidYMid meet"
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
    >
      <Arc strokeWidth={strokeWidth} fill="none" strokeOpacity={0.08} completed={1} />
      <Arc strokeWidth={strokeWidth} completed={value} />
    </svg>
  </div>
);

Circle.propTypes = {
  value: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

const LoadingCircle = ({
  percentage: initialPercentage,
  className,
  strokeWidth,
}) => {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setPercentage(initialPercentage);
    }, 100);
  }, [initialPercentage]);

  return (
    <Circle className={className} strokeWidth={strokeWidth} value={((percentage / 100))} />
  );
};

LoadingCircle.defaultProps = {
  className: '',
  strokeWidth: 1,
};

LoadingCircle.propTypes = {
  percentage: PropTypes.number.isRequired,
  className: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default LoadingCircle;

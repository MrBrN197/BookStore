/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const pathTransitionStyle = {
  transition: 'all 200ms ease-in',
};

const Arc = ({
  a,
  b,
  completed,
  strokeWidth: sw,
  stroke,
  ...otherProps
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
      {...otherProps}
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

const Circle = ({
  value,
  background,
  className,
  ...otherProps
}) => (
  <div className={className}>
    <svg
      preserveAspectRatio="xMidYMid meet"
      style={{
        backgroundColor: background,
      }}
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
    >
      <Arc strokeWidth={otherProps.strokeWidth} fill="none" strokeOpacity="0.08" completed={1} />
      <Arc strokeWidth={otherProps.strokeWidth} {...otherProps} completed={value} />
    </svg>
  </div>
);

const LoadingCircle = ({
  percentage: initialPercentage,
  ...otherProps
}) => {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setPercentage(initialPercentage);
    }, 100);
  }, [initialPercentage]);

  return (
    <Circle {...otherProps} value={((percentage / 100))} />
  );
};

LoadingCircle.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default LoadingCircle;

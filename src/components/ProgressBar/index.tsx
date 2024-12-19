import { ProgressBar } from 'primereact/progressbar';
import React from 'react';

interface CustomProgressBarProps {
  isLoad: boolean;
  className?: string;
}

const Progress: React.FC<CustomProgressBarProps> = props => {
  if (props.isLoad === true) {
    return (
      <ProgressBar
        mode="indeterminate"
        style={{ height: '3px' }}
        {...props}
      ></ProgressBar>
    );
  } else {
    return <></>;
  }
};

export default Progress;

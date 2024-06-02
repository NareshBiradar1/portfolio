import React from 'react';
import ProgressBar from 'react-progressbar';

const CustomProgressBar = ({ progress }) => {
    return (
        <ProgressBar completed={progress} color={'red'} />
    );
};

export default CustomProgressBar;

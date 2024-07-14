// MainButton.jsx
import React from 'react';
import PropTypes from 'prop-types';
import style from './MainButton.module.css';

const MainButton = ({ name, onClickHandler }) => {
    return (
        <div onClick={onClickHandler} className={style.button}>
            {name}
        </div>
    );
};

MainButton.propTypes = {
    name: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func.isRequired,
};

export default MainButton;
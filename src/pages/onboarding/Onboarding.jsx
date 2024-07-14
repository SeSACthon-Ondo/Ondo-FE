import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/button/MainButton';

import icon from '../../assets/ondo.png';
import style from './Onboarding.module.css';

const Onboarding = () => {
    const navigate = useNavigate();
    const goMainHandler = () => {
        navigate('/main');
    }
    return (
        <div className={style.container}>
            <div className={style.title_wrapper}>
            <img src={icon} className={style.mainImg}/>
                <p className={style.title}>溫도</p>
                <p className={style.info}>따뜻함을 나눠주는 지도</p>
            </div>
            <div className={style.btn_wrapper}>
                <Button 
                    name={'시작하기'}
                    onClickHandler={goMainHandler}
                />
            </div>
        </div>
    );
};

export default Onboarding;

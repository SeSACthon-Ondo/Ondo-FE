import style from './Main.module.css';
import icon from '../../assets/ondo_white.png';
import card from '../../assets/card.png'

const Main = () => {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <img src={icon}/>
                <span>온도</span>
            </div>
            
            <div className={style.inner_container}>
                <div className={style.info_con}>
                    <p className={style.info1}>어떤 카드를 사용하고 싶나요?</p>
                    <p className={style.info2}>조건을 입력하면 AI가 가맹점을 추천해줘요</p>
                </div>

                <div className={style.card_container}>
                    <div className={style.card}>
                        <img src={card}/>
                        <div className={style.right_container}>
                            <div className={style.info_container}>
                                <p className={style.info_name}>꿈나무 카드</p>
                                <p className={style.info}>가맹 음식점 찾기</p>
                            </div>
                            <div className={style.btn}>
                                <span>가맹점 찾기</span>
                            </div>
                        </div>
                    </div>

                    <div className={style.card}>
                        <img src={card}/>
                        <div className={style.right_container}>
                            <div className={style.info_container}>
                                <p className={style.info_name}>문화 누리 카드</p>
                                <p className={style.info}>가맹 문화시설 찾기</p>
                            </div>
                            <div className={style.btn}>
                                <span>가맹점 찾기</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.more_container}>
                    <div className={style.more}>
                        <p>꿈나무 카드 알아보기</p>
                        <div className={style.more_btn}>GO</div>
                    </div>
                    <div className={style.more}>
                        <p>문화 누리 카드 알아보기</p>
                        <div className={style.more_btn}>GO</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Main;
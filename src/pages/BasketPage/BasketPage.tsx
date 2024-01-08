import React, {FC} from 'react';

import Footer from "../../components/Footer/Footer.tsx";
import Header from "../../components/Header/Header.tsx";
import PathLink from "../../components/Path/PathLInk/PathLink.tsx";
import {Button} from "../../components/UI/Buttons/Base/Button.tsx";
import Counter from "../../components/UI/Counter/Counter.tsx";
import Price from "../../components/Price/Price.tsx";
import img from "../../assets/new__cakes/news1.png"

import style from "./Basket.module.css"
import {Link} from "react-router-dom";

//Todo refactor code
//Todo refactor link to payment
const BasketPage:FC = () => {
    const path = window.location.pathname
    return (
        <>
            <Header background={path === "/" ? "transperent" : "#CA8B81"}/>
            <div className={style.wrapper}>
                <div className="container">
                    <div className={style.page}>
                        <PathLink/>
                        <h2 className={style.title}>Корзина</h2>
                        <Button>Очистить корзину</Button>
                        <div className={style.basket}>
                            <div className={style.products}>
                                <div className={style.item}>
                                    <div className={style.description}>
                                        <img src={img} alt="img" width={180} height={150}/>
                                        <div className={style.product}>
                                            <span>ТОРТ ОСЕННИЙ С ИНЖИРОМ </span>
                                            <span>1 Порц. 2500г.</span>
                                            <Button>Удалить</Button>
                                        </div>
                                    </div>
                                    <div className={style.price}>
                                        <div className={style.block1}>
                                            <span>Цена за 1шт.</span>
                                            <Price children={1999}/>
                                        </div>
                                        <div className={style.block1}>
                                            <span>Количество</span>
                                            <Counter/>
                                        </div>
                                        <div className={style.block1}>
                                            <span>Итого</span>
                                            <Price children={1999}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.item}>
                                    <div className={style.description}>
                                        <img src={img} alt="img" width={180} height={150}/>
                                        <div className={style.product}>
                                            <span>ТОРТ ОСЕННИЙ С ИНЖИРОМ </span>
                                            <span>1 Порц. 2500г.</span>
                                            <Button>Удалить</Button>
                                        </div>
                                    </div>
                                    <div className={style.price}>
                                        <div className={style.block1}>
                                            <span>Цена за 1шт.</span>
                                            <Price children={1999}/>
                                        </div>
                                        <div className={style.block1}>
                                            <span>Количество</span>
                                            <Counter/>
                                        </div>
                                        <div className={style.block1}>
                                            <span>Итого</span>
                                            <Price children={1999}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.item}>
                                    <div className={style.description}>
                                        <img src={img} alt="img" width={180} height={150}/>
                                        <div className={style.product}>
                                            <span>ТОРТ ОСЕННИЙ С ИНЖИРОМ </span>
                                            <span>1 Порц. 2500г.</span>
                                            <Button>Удалить</Button>
                                        </div>
                                    </div>
                                    <div className={style.price}>
                                        <div className={style.block1}>
                                            <span>Цена за 1шт.</span>
                                            <Price children={1999}/>
                                        </div>
                                        <div className={style.block1}>
                                            <span>Количество</span>
                                            <Counter/>
                                        </div>
                                        <div className={style.block1}>
                                            <span>Итого</span>
                                            <Price children={1999}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.item}>
                                    <div className={style.description}>
                                        <img src={img} alt="img" width={180} height={150}/>
                                        <div className={style.product}>
                                            <span>ТОРТ ОСЕННИЙ С ИНЖИРОМ </span>
                                            <span>1 Порц. 2500г.</span>
                                            <Button>Удалить</Button>
                                        </div>
                                    </div>
                                    <div className={style.price}>
                                        <div className={style.block1}>
                                            <span>Цена за 1шт.</span>
                                            <Price children={1999}/>
                                        </div>
                                        <div className={style.block1}>
                                            <span>Количество</span>
                                            <Counter/>
                                        </div>
                                        <div className={style.block1}>
                                            <span>Итого</span>
                                            <Price children={1999}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.reducer}>
                                <h3>Ваша корзина</h3>
                                <div className={style.block}>
                                    <span>Сумма без скидок</span>
                                    <Price children={2500}/>
                                </div>
                                <div className={style.block}>
                                    <span>Скидка по акциям</span>
                                    <Price children={501}/>
                                </div>
                                <div className={style.block}>
                                    <span>Итого</span>
                                   <Price children={1999}/>
                                </div>
                                <Button>У вас есть промокод?</Button>
                                <Button>
                                    <Link to={"/basket/payment"}>Продолжить</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default BasketPage;
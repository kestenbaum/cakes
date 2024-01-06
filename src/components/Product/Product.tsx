import React, {FC} from 'react';
import testimg from "../../assets/cakes/image 12.png"

import style from "./Product.module.css"
import ProductTitle from "./ProductTitle/ProductTitle.tsx";
import {Rating} from "react-simple-star-rating";
import ProductPrice from "./ProductPrice/ProductPrice.tsx";
import ProductCounter from "./ProductCounter/ProductCounter.tsx";

const Product:FC = () => {
    return (
        <div className={style.wrappper}>
            <div className={style.block}>
                <img src={testimg} alt="img" className={style.img}/>
                <div className={style.description}>
                   <ProductTitle children={"ТОРТ ОСЕННИЙ С ИНЖИРОМ "}/>
                    <Rating/>
                    <ProductPrice/>
                    <ProductCounter/>
                    <div className={style.block2}>
                        <div className={style.block3}>
                            <span>Вес</span>
                            <span>2500г.</span>
                        </div>
                        <div className={style.block3}>
                            <span>В наличии</span>
                            <span>50п.</span>
                        </div>
                        <div className={style.block3}>
                            <span>Производитель</span>
                            <span>Украина</span>
                        </div>
                        <span>Медовик на белом шоколаде с добавлением
                                инжира. Украшенный ежевикой и инжиром</span>
                    </div>
                </div>
            </div>
            <div className={style.similar}>
                <h3 className={style.similarTitle}>Похожие товары</h3>
            </div>
        </div>
    );
};

export default Product;
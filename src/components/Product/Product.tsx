import React, {FC} from 'react';
import {Rating} from "react-simple-star-rating";

import testimg from "../../assets/cakes/image 12.png"
import ProductPrice from "./ProductPrice/ProductPrice.tsx";
import ProductCounter from "./ProductCounter/ProductCounter.tsx";
import ProductDescription from "./ProductDescription/ProductDescription.tsx";
import ProductTitle from "./ProductTitle/ProductTitle.tsx";

import style from "./Product.module.css"

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
                    <ProductDescription/>
                </div>
            </div>
        </div>
    );
};

export default Product;
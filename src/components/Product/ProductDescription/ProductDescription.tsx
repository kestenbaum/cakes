import React, {FC} from 'react';
import style from "../ProductDescription/ProductDescription.module.css";

const ProductDescription:FC = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.block}>
                <span>Вес</span>
                <span>2500г.</span>
            </div>
            <div className={style.block}>
                <span>В наличии</span>
                <span>50п.</span>
            </div>
            <div className={style.block}>
                <span>Производитель</span>
                <span>Украина</span>
            </div>
            <span>Медовик на белом шоколаде с добавлением
                                инжира. Украшенный ежевикой и инжиром</span>
        </div>
    );
};

export default ProductDescription;
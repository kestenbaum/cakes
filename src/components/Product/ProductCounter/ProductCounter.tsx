import React from 'react';
import {Button} from "../../UI/Buttons/Base/Button.tsx";

import style from "../ProductCounter/ProductCounter.module.css";
import Counter from "../../UI/Counter/Counter.tsx";
const ProductCounter = () => {
    return (
        <div className={style.block1}>
            <Counter/>
            <Button>В корзину</Button>
        </div>
    );
};

export default ProductCounter;
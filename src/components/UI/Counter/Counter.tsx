import React, {FC, useState} from 'react';
import {Button} from "../Buttons/Base/Button.tsx";

import style from "./Counter.module.css"
const Counter:FC = () => {
    const [count, setCount] = useState<number>(0)

    return (
        <div className={style.wrapper}>
            <Button onClick={() => setCount(count - 1)}>-</Button>
            <div className={style.count}>{count}</div>
            <Button onClick={() => setCount(count + 1)}>+</Button>
        </div>
    );
};

export default Counter;
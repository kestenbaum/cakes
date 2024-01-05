import {FC, useState} from "react";

import Checkbox from "../../UI/Checkbox/Checkbox.tsx";
import style from "./FilterCakes.module.css";
import {Button} from "../../UI/Buttons/Base/Button.tsx";
const FilterCakes:FC = () => {

    const [checkbox, setCheckbox] = useState<string[]>(
        ["Любой", "Небольшой(до 1кг)", "Средний(1-2кг)", 'Большой(от 2кг)']
    )

    return (
        <div className={style.wrapper}>
            <h3 className={style.title}>Фильтры</h3>
            <div className={style.block}>
                <span className={style.label}>Вес упаковки </span>
                {checkbox.map(checkbox => <Checkbox children={checkbox} /> )}
            </div>
            <h3 className={style.title}>Цена</h3>
            <div className={style.price}>
                <div className={style.box}>
                    <span className={style.cost}>39</span>
                </div>
                <div className={style.box}>
                    <span className={style.cost}>65263</span>
                </div>
            </div>
             <input className={style.test}
                type={"range"}
                min={0}
                max={1000}
             />
            <div
                className={style.navigate}
            >
                <Button>Применить</Button>
                <Button>Очистить</Button>
            </div>
        </div>
    );
};

export default FilterCakes;
import {FC, useState} from "react";

import style from "./FilterCakes.module.css";
const FilterCakes:FC = () => {
    const [checkboxes, setCheckboxes] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
    });

    const handleCheckboxChange = (checkboxName:keyof typeof checkboxes) => {
        setCheckboxes((prevCheckboxes) => ({
            ...prevCheckboxes,
            [checkboxName]: !prevCheckboxes[checkboxName],
        }));
    };

    return (
        <div className={style.wrapper}>
            <h3 className={style.title}>Фильтры</h3>
            <div className={style.block}>
                <span className={style.text}>Вес упаковки </span>
                <label
                    className={style.text}
                >
                    <input
                        type="checkbox"
                        checked={checkboxes.checkbox1}
                        onChange={() => handleCheckboxChange('checkbox1')}
                    />
                    Любой
                </label>

                <label
                    className={style.text}
                >
                    <input
                        type="checkbox"
                        checked={checkboxes.checkbox2}
                        onChange={() => handleCheckboxChange('checkbox2')}
                    />
                    Небольшой(до 1кг)
                </label>

                <label
                    className={style.text}
                >
                    <input
                        type="checkbox"
                        checked={checkboxes.checkbox3}
                        onChange={() => handleCheckboxChange('checkbox3')}
                    />
                    Средний(1-2кг)
                </label>

                <label
                    className={style.text}
                >
                    <input
                        type="checkbox"
                        checked={checkboxes.checkbox4}
                        onChange={() => handleCheckboxChange('checkbox4')}
                    />
                    Большой(от 2кг)
                </label>
            </div>
            <h3 className={style.title}>Цена</h3>

        </div>
    );
};

export default FilterCakes;
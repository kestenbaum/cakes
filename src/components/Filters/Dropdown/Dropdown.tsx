import {FC, useState} from "react";

import style from "./Dropdown.module.css";
const Dropdown:FC = () => {
    const options = ["цене", "количеству", "рейтингу"];
    const [active, setActive] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>(options[0]);

    return (
        <div className={style.wrapper}>
            <h2 className={style.title}>сортировать по:</h2>
            <div className={style.menu}>
                <div
                    className={style.item}
                    onClick={() => setActive(!active)}
                >
                    {selected}
                    <div className={`${active ? style.rotate : style.icon}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11" fill="none">
                          <path d="M9.03627 10.9999L0.32179 0.544829L17.6421 0.455194L9.03627 10.9999Z" fill="#FF5151"/>
                        </svg>
                    </div>
                </div>
                <ul className={`${style.list} ${active ? style.active : style.list}`}>
                {options.map((option, index) => {
                return <li
                    className={style.item}
                    key={index}
                    onClick={() => {setSelected(option); setActive(!active)}}
                >
                    {option}
                </li>
                })}
            </ul>
            </div>
        </div>
    );
};

export default Dropdown;
import {FC} from "react";

import style from "./Naviagate.module.css"
const Navigate:FC = () => {

    const data = [
        {
            id: 1,
            title: "Обзоры"
        },
        {
            id: 2,
            title: "О компании"
        },
        {
            id: 3,
            title: "Отзывы"
        },
        {
            id: 4,
            title: "Доставка"
        },
    ]

    return (
            <ul className={style.wrapper}>
                {data.map(item => {
                    return <li
                        key={item.id}
                        className={style.item}
                    >
                        <a
                            className={style.link}
                            href=""
                        >
                            {item.title}
                        </a>
                    </li>
                })}
            </ul>
    );
};

export default Navigate;
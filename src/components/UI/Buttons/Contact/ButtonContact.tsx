import {FC} from "react";

import style from './ButtonContact.module.css';
import {IButtonContact} from "../../../../models";


const ButtonContact:FC<IButtonContact> = ({svg, title, store}) => {
    return (
        <button className={style.button}>
            <div className={style.icon}>
                {svg}
            </div>
            <div className={style.wrapper}>
                <span className={style.title}>{title}</span>
                <span className={style.store}>{store}</span>
            </div>
        </button>
    );
};

export default ButtonContact;
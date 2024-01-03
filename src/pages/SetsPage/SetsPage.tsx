import {FC} from "react";
import {Link} from "react-router-dom";

import Header from "../../components/Header/Header.tsx";
import PathLink from "../../components/Path/PathLInk/PathLink.tsx";
import Footer from "../../components/Footer/Footer.tsx";

import {data} from "../../data";
import style from "./SetsPage.module.css"

const SetsPage:FC = () => {
    const path = window.location.pathname
    return (
        <>
            <Header background={path === "/" ? "transperent" : "#CA8B81"}/>
            <div className={style.wrapper}>
                <div className="container">
                    <section className={style.page}>
                        <PathLink/>
                        <h1 className={style.title}>Наборы</h1>
                        <div className={style.sets}>
                            {data.sets.map(set => {
                                return (
                                    <Link
                                        to={"/"}
                                        key={set.id}
                                        className={style.set}>
                                        <img src={set.img} alt={set.description}/>
                                    </Link>
                                );
                            })}
                        </div>
                    </section>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default SetsPage;
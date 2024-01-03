import {FC} from "react";
import {Link} from "react-router-dom";

import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import PathLink from "../../components/Path/PathLInk/PathLink.tsx";

import style from "./CakesPage.module.css"
import {data} from "../../data";
import Dropdown from "../../components/Filters/Dropdown/Dropdown.tsx";
import FilterCakes from "../../components/Filters/FilterCakes/FilterCakes.tsx";
const CakesPage:FC = () => {
    const path = window.location.pathname

    return (
        <>
            <Header background={path === "/" ? "transperent" : "#CA8B81"}/>
            <div className={style.wrapper}>
                <div className="container">
                    <section className={style.page}>
                        <PathLink/>
                        <h1 className={style.title}>Торты</h1>
                        <Dropdown/>
                        <FilterCakes/>
                        <div className={style.cakes}>
                            {data.cakes.map(cake => {
                                return (
                                    <Link
                                        to={"/"}
                                        key={cake.id}
                                        className={style.cake}>
                                        <img src={cake.img} alt={cake.description}/>
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

export default CakesPage;
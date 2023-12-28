import React, {FC} from 'react';
import Header from "../Header/Header.tsx";

const CatalogPage:FC = () => {
    const path = window.location.pathname
    return (
        <div>
            <Header background={path === "/" ? "transperent" : "#CA8B81"}/>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium animi assumenda, commodi cupiditate doloribus eaque hic incidunt ipsum mollitia, obcaecati odio quia, quis repellat tempore? Ab alias animi atque blanditiis culpa dolores earum excepturi fuga ipsum itaque iusto, minima, nostrum numquam odit provident ratione repellendus repudiandae sapiente tempora vero. A, accusamus commodi consequuntur culpa cumque dignissimos dolorum enim eum expedita fuga illo inventore iusto nesciunt, non quae reiciendis sequi? Aut deserunt dolorem ea eius eligendi et ex fugiat illo impedit ipsa, magnam nam neque nostrum optio pariatur perferendis perspiciatis quas quod similique sit suscipit tenetur unde. Corporis minus, voluptatum?</div>
        </div>
    );
};

export default CatalogPage;
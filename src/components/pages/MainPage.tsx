import React, {FC} from 'react';

import Header from "../Header/Header.tsx";
import FirstScreen from "../FirstScreen/FirstScreen.tsx";

const MainPage:FC = () => {
    const path = window.location.pathname
    return (
        <div>
            <Header background={path === "/" ? "transperent" : "#CA8B81"}/>
            <FirstScreen/>
        </div>
    );
};

export default MainPage;
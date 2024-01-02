import {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import {PrivateRouter} from "../router";

const AppRouter:FC = () => {
    return (
        <Routes>
                {PrivateRouter.map(route =>
                        <Route
                            path={route.path}
                            key={route.path}
                            element={<route.component/>}
                        />
                )}
        </Routes>
    );
};

export default AppRouter;
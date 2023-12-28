import {AppRouter} from "../../models";

import {MainPage, CatalogPage} from "../pages"

export enum RouterNames {
    MAIN_PAGE = '/',
    CATALOG_PAGE = "/catalog"
}

export const PrivateRouter: AppRouter[] = [
    {path: RouterNames.MAIN_PAGE, component: MainPage},
    {path: RouterNames.CATALOG_PAGE, component: CatalogPage},
]
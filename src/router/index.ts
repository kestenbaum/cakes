import {AppRouter} from "../models";

import {MainPage, CatalogPage, Test} from "../pages"

export enum RouterNames {
    MAIN_PAGE = '/',
    CATALOG_PAGE = "/catalog",
    TEST = '/catalog/test'
}

export const PrivateRouter: AppRouter[] = [
    {path: RouterNames.MAIN_PAGE, component: MainPage, title: "Главная"},
    {path: RouterNames.CATALOG_PAGE, component: CatalogPage, title: "Каталог"},
    {path: RouterNames.TEST, component: Test, title: "test"},
]
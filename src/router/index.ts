import {AppRouter} from "../models";

import {MainPage, CatalogPage, Test, CakesPage, SetsPage, NewsCakes} from "../pages"

export enum RouterNames {
    MAIN_PAGE = '/',
    CATALOG_PAGE = "/catalog",
    TEST = '/catalog/test',
    CAKES_PAGE = '/catalog/cakes',
    SETS_PAGE = '/catalog/sets',
    NEWS_CAKES = '/catalog/news',
}

export const PrivateRouter: AppRouter[] = [
    {path: RouterNames.MAIN_PAGE, component: MainPage, title: "Главная"},
    {path: RouterNames.CATALOG_PAGE, component: CatalogPage, title: "Каталог"},
    {path: RouterNames.TEST, component: Test, title: "test"},
    {path: RouterNames.CAKES_PAGE, component: CakesPage, title: "Торты"},
    {path: RouterNames.SETS_PAGE, component: SetsPage, title: "Наборы"},
    {path: RouterNames.NEWS_CAKES, component: NewsCakes, title: "Новинки"},
]
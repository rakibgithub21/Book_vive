import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "./Home";
import ListedBooks from "./ListedBooks";
import PagesToRead from "./PagesToRead";
import BookDetails from "../components/BookDetails/BookDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/listedbooks',
                element:<ListedBooks></ListedBooks>
            },
            {
                path: '/pagestoread',
                element:<PagesToRead></PagesToRead>
            },
            {
                path: '/bookdetails/:id',
                element: <BookDetails></BookDetails>,
                loader:({params})=>fetch('../allbooks.json')
            }
        ]
    },

]);
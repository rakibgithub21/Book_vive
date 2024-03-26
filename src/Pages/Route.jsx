import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "./Home";
import ListedBooks from "./ListedBooks";
import PagesToRead from "./PagesToRead";
import BookDetails from "../components/BookDetails/BookDetails";
import ErrorPage from "./ErrorPage";
import CustomerReview from "./CustomerReview";
import SuccesStory from "./SuccesStory";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/listedbooks',
                element: <ListedBooks></ListedBooks>
            },
            {
                path: '/pagestoread',
                element: <PagesToRead></PagesToRead>
            },
            {
                path: '/bookdetails/:id',
                element: <BookDetails></BookDetails>,
                loader: ({ params }) => fetch('../allbooks.json')
            },
            {
                path: '/review',
                element:<CustomerReview></CustomerReview>
            },
            {
                path: '/success',
                element:<SuccesStory></SuccesStory>
            }
        ]
    },

]);
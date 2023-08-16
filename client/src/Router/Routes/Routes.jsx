import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import ReadPage from "../../pages/ReadPage";
import CreatePage from "../../pages/CreatePage";
import UpdatePage from "../../pages/UpdatePage";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <ReadPage></ReadPage>
            },
            {
                path: '/create',
                element: <CreatePage></CreatePage>
            },
            {
                path: '/update',
                element: <UpdatePage></UpdatePage>
            }
        ]
    }
])
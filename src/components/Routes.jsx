import { useRoutes } from "react-router-dom"
import KrimCht from "./KrimCht"
import BeshPs from "./BeshPs"
import Jango from "./Jango"
import OdvGol from "./OdvGol"
import OdvGol_opisanie from "./OdvGol_opisanie"
import Jango_opisanie from "./Jango_opisanie"
import BeshPs_opisanie from "./BeshPs_opisanie"
import KrimCht_opisanie from "./KrimCht_opisanie"
function Routes() {

    const routes = useRoutes([
        {
            path:'/криминальное_чтиво',
            element: <KrimCht/>,
            children:[
                {
                    path:'описание',
                    element:<KrimCht_opisanie/>
                }
            ]
        },
        {
            path:'/бешенные_псы',
            element:<BeshPs/>,
            children:[
                {
                    path:'описание',
                    element:<BeshPs_opisanie/>
                }
            ]
        },
        {
            path:'/джанго_освобожденный',
            element:<Jango/>,
            children:[
                {
                    path:'описание',
                    element:<Jango_opisanie/>

                }
            ]
            
        },
        {
            path:'/однажды_в_голливуде',
            element:<OdvGol/>,
            children:[
                {
                    path:'описание',
                    element:<OdvGol_opisanie/>
                }
            ]
        },
        {
            path: '*',
            element: <h1>Error 404</h1>
        }
    ])

    return routes
}

export default Routes
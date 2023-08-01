import { Link, Outlet } from "react-router-dom"

function Jango(){
    return(
        <div style={{width:'500px',height:'500px',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
            <div>Джанго освобожденный</div>
            <img src="" alt="" style={{width:'300px',height:'300px'}}/>
            <Link to='описание'>описание</Link>
            <Outlet/>
        </div>
    )
}

export default Jango
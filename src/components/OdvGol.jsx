import { Link, Outlet } from "react-router-dom"

function OdvGol(){
    return(
        <div style={{width:'500px',height:'500px',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
            <div>однажды в голливуде</div>
            <img src="" alt="" style={{width:'300px',height:'300px'}}/>
            <Link to='описание'>Описание</Link>
            <Outlet/>
        </div>
    )
}

export default OdvGol
import { Link } from "react-router-dom"

function Header() {
    return (
        <header style={{ borderBottom: '1px solid' }}>
            <ul>
                <li>
                    <Link to='/криминальное_чтиво'>криминальное чтиво</Link>
                    
                </li>
                <li>
                    <Link to='/бешенные_псы'>бешенные псы</Link>
                </li>
                <li>
                    <Link to='/джанго_освобожденный'>джанго освобожденный </Link>
                </li>
                <li>    
                    <Link to='/однажды_в_голливуде'>однажды в голливуде</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header
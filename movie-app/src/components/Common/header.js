import { Navbar, Container } from "react-bootstrap";
import { VscAccount } from "react-icons/vsc";
import { IoLogoNpm } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

import Search from "../../pages/Search";
import header from "./header.css"
const Header = () => {
    const navigate = useNavigate()
    return (
        <Navbar className="Navbar" bg="black" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <IoLogoNpm size="70" color="red" />
                </Navbar.Brand>
                <div>
                    {Search()}
                </div>
                <div>
                    <VscAccount size="30" color="#fff" fontWeight="5px" />
                </div>
                <div>
                    <CiLogin size="30" color="#fff" onClick={()=>{navigate("/login")}}/>
                </div>
            </Container>
        </Navbar>
    );
}

export default Header;
import Header from "../components/Common/header";
import Top from "../components/Common/top"
import Upcoming from "../components/Main/Upcoming";
import Popular from "../components/Main/Popular";
import ResultSearch from "../components/Search/ResultSearch";
import { useParams } from "react-router-dom";

function Main() {
    
    
    return (
        <>
            <Header />
            <Upcoming />
            <Popular />
            <Top />
        </>
    );

}

export default Main

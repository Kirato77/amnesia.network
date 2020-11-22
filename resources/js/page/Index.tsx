import {FunctionComponent, h, Fragment} from "preact";
import Splash from "../components/Splash";
import DarkModeToggle from "../components/DarkModeToggle";
import Content from "../components/Content";
import Footer from "../components/Footer";

const Index: FunctionComponent = () => {
    return (
        <>
            <DarkModeToggle/>
            <Splash>
                <Content/>
                <Footer/>
            </Splash>
        </>
    )
}

export default Index;

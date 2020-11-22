import { FunctionComponent, h } from "preact";
import Container from "./Container";

const Header: FunctionComponent = () => {

    return (
        <div class='w-full bg-white shadow-md h-16 text-3xl fixed'>
            <Container class='h-full my-2'>
                <span class='align-middle inline-block'>Amnesia Network</span>
            </Container>
        </div>
    )
}

export default Header;

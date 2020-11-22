import {FunctionComponent, h, Fragment, VNode} from "preact";
import DarkModeToggle from "../components/DarkModeToggle";
import Container from "../components/Container";
import Splash from "../components/Splash";
import Footer from "../components/Footer";
import {usePage} from "@inertiajs/inertia-react";
import {ProductData} from "../types";
import Product from "../components/Product";
import Back from "../components/Back";
import {useState} from "preact/hooks";

const Store: FunctionComponent = () => {

    const {products} = usePage().props as {products: ProductData[]};

    const [popup, setPopup] = useState<VNode | null>(null);

    return (
        <>
            <DarkModeToggle/>
            <Back/>

            {popup}

            <Splash full={false} title="Products">
                <Container class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 md:px-0 px-12 gap-4 justify-center">
                    {products.map((product) => {
                        return <Product setPopup={setPopup} {...product}/>
                    })}
                </Container>

                <Footer/>
            </Splash>
        </>
    )
}

export default Store;

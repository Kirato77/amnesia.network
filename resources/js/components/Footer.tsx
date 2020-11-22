import { FunctionComponent, h } from "preact";
import Container from "./Container";
import Link from "./Link";

const Footer: FunctionComponent = () => {

    return (
        <div class='w-full bg-black mt-16 py-16 font-inter'>
            <Container class="flex md:justify-between md:flex-row justify-center flex-col px-8">
                <div class="text-2xl text-gray-100 font-bold md:text-left text-center">
                    <img class="inline-block h-8 w-8 mr-1" src="/assets/logo.png"/> Amnesia Network
                </div>

                <div class="flex justify-between md:w-1/3 md:pt-0 pt-12">
                    <h4 class="text-xl text-gray-400 font-bold">Follow Us</h4>
                    <div class="flex justify-end">
                        <Link class="ml-2 transition-all transform text-gray-500 hover:text-blue-500 dark:hover:text-blue-500 hover:-translate-y-px hover:scale-110" type="jundao" href="https://jundao.app"/>
                        <Link class="ml-2 transition-all transform text-gray-500 hover:text-blue-500 dark:hover:text-blue-500 hover:-translate-y-px hover:scale-110" type="github" href="https://github.com/amnesia-network"/>
                        <Link class="ml-2 transition-all transform text-gray-500 hover:text-blue-500 dark:hover:text-blue-500 hover:-translate-y-px hover:scale-110" type="twitter" href="https://twitter.com/amnesia_network"/>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer;

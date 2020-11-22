import { FunctionComponent, h, Fragment} from "preact";
import Container from "./Container";
import Jeremy from "./Jeremy";
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import {TeamMember} from "../types";
import Card from "./Card";

declare function route(name:string, params?: any): string;

const Content: FunctionComponent = () => {

    const {team} = usePage().props as {team: TeamMember[]};

    return (
        <>
            <Container>
                <Jeremy/>

                <div class="my-56 font-inter text-center px-4">
                    <h3 class="text-4xl text-gray-900 dark:text-white font-bold">Products</h3>
                    <div class="text-2xl text-gray-800 dark:text-gray-100 my-12">
                        <p>We have a few products already out such as bottles, pins and more!</p>
                        <p>Sadly they aren't available for shipping yet.</p>
                    </div>

                    <InertiaLink href={route('store')} class='text-gray-900 dark:text-white inline-block text-2xl font-bold rounded-md shadow-md transition-all bg-blue-500 hover:shadow-xl transform hover:rotate-2 hover:-translate-y-px hover:scale-125 mt-4 py-6 px-8'>
                        Check them out!
                    </InertiaLink>
                </div>

                <div class="my-56 px-4">
                    <h3 class='font-inter text-center text-4xl text-gray-900 dark:text-white font-bold'>Our Team</h3>

                    <div class='flex w-full justify-center flex-wrap my-16'>
                        {team.map((teamMember) => {
                            return <Card class='m-4' {...teamMember}/>;
                        })}
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Content;

import {FunctionComponent, h} from "preact";
import {InertiaLink} from "@inertiajs/inertia-react";

declare function route(name:string, params?: any): string;

const Back: FunctionComponent = () => {

    return (
        <InertiaLink href={route('index')} class='absolute top-0 left-0 fixed z-50 select-none transition-all pt-10 pl-10 text-gray-900 dark:text-white text-xl font-inter transform hover:rotate-2 hover:scale-110'>
            <div class="rounded bg-blue-500 shadow-md px-4 py-2">
                <svg class="inline -ml-1 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"/></svg>
                Go Back
            </div>
        </InertiaLink>
    )
}

export default Back;

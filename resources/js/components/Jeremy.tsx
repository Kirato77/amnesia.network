import { FunctionComponent, h } from "preact";
import Quote from "./Quote";
import Link from "./Link";

const Jeremy: FunctionComponent = () => {

    return (
        <div class='flex justify-center items-center'>
            <div class="transition-all rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:rotate-2 hover:scale-110 p-8 flex md:flex-row flex-col border border-gray-100 dark:border-gray-900">
                <div>
                    <img class="rounded-full h-32 w-32 mb-6 text-center mx-auto" src="/assets/jer3m01.png"/>
                    <div class="text-4xl text-center font-mono font-extrabold text-gray-900 dark:text-white">jer3m01</div>
                    <div class="mt-2 text-xl text-center font-mono font-bold text-gray-900 dark:text-white">Jeremy Bagnall</div>
                    <div class='text-xl text-center text-gray-600 dark:text-gray-200 font-inter font-medium mt-2'>CEO - Founder</div>
                </div>
                <div class="md:ml-8 md:mt-0 mt-8 md:border-l-4 md:border-t-0 border-t-4 border-gray-200 dark:border-gray-700 md:pl-8 md:pt-0 pt-8 flex flex-col justify-between">
                    <Quote>
                        Why not?
                    </Quote>
                    <div class='flex items-end md:justify-end justify-center md:pl-56 md:pt-0 pt-12'>
                        <Link type='website' href='https://jer3m01.com'/>
                        <Link type='github' href='https://github.com/jer3m01'/>
                        <Link type='twitter' href='https://twitter.com/jer3m01'/>
                        <Link type='reddit' href='https://reddit.com/u/jer3m01'/>
                        <Link type='twitch' href='https://www.twitch.tv/jer3m01'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jeremy;

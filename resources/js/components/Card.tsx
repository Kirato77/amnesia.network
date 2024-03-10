import { FunctionComponent, h } from "preact";
import Link from "./Link";
import {TeamMember} from "../types";

interface CardProps extends TeamMember {
    class?: string
}

const Card: FunctionComponent<CardProps> = (props) => {

    return (
        <div class={'flex justify-center items-center ' + props.class}>
            <div class="h-full w-full transition-all rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg flex items-center transform hover:rotate-2 hover:scale-110 p-8 border border-gray-100 dark:border-gray-900">
                <div>
                    <img class="rounded-full h-32 w-32 mb-6 text-center mx-auto" src={"/assets/" + props.username + ".png"}/>
                    <div class="text-4xl text-center font-mono font-extrabold text-gray-900 dark:text-white">{props.username}</div>
                    {/*<div class="mt-2 text-xl text-center font-mono font-bold text-gray-900 dark:text-white">{props.name}</div>*/}
                    {/*<div class='text-xl text-center text-gray-600 dark:text-gray-200 font-inter font-medium mt-2'>{props.role}</div>*/}
                    {
                        props.social &&
                        <div class='flex justify-center mt-2'>
                            {props.social.website && <Link type='website' href={'https://' + props.social.website}/>}
                            {props.social.github && <Link type='github' href={'https://github.com/' + props.social.github}/>}
                            {props.social.twitter && <Link type='twitter' href={'https://twitter.com/' + props.social.twitter}/>}
                            {props.social.reddit && <Link type='reddit' href={'https://reddit.com/u/' + props.social.reddit}/>}
                            {props.social.twitch && <Link type='twitch' href={'https://www.twitch.tv/' + props.social.twitch}/>}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Card;

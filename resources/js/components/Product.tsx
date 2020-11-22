import {FunctionComponent, h, JSX, Fragment, VNode} from "preact";
import {ProductData} from "../types";
import {useRef} from "preact/hooks";

interface ProductProps extends ProductData {
    setPopup: (node: VNode | null) => void
}

const Product: FunctionComponent<ProductProps> = (props) => {

    let extraClasses = "";

    if (props.size?.col) extraClasses += " col-span-" + props.size.col;
    if (props.size?.row) extraClasses += " row-span-" + props.size.row;

    const imgViewer = useRef<HTMLImageElement>();

    const imgSrc = (i: number): string => {
        return "/assets/" + props.image + "/" + i + ".png"
    }

    const popup = (
        <div class="fixed z-40 left-0 w-screen h-screen overflow-y-scroll">
            <div class="absolute pointer-events-none z-40 flex justify-center lg:items-center h-full w-full">
                <div class="lg:h-auto h-min-content pointer-events-auto lg:h-3/4 lg:my-0 my-32 lg:w-3/4 w-5/6 rounded-xl bg-white dark:bg-gray-800 shadow-2xl lg:py-16 py-8 mx-8 flex justify-between lg:flex-row flex-col-reverse">
                    <div class="flex justify-around flex-col items-center lg:w-1/2 lg:h-auto h-1/2 lg:px-16 px-4">
                        <div class="h-4/5 text-center">
                            <img ref={imgViewer} class="inline-block h-full rounded-md" src={imgSrc(1)}/>
                        </div>
                        <div class="flex justify-around flex-wrap mt-4">
                            {
                                [...Array(props.images).keys()].map((i) => {
                                    return (
                                        <img onClick={() => {
                                            imgViewer.current.setAttribute("src", imgSrc(i + 1));
                                        }} class="lg:h-32 h-24 m-2 transform transition-all hover:rotate-2 hover:scale-110 cursor-pointer rounded-md" src={"/assets/" + props.image + "/" + (i + 1)+ ".png"}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div class="lg:px-8 px-4 lg:w-1/2">
                        <h3 class="font-inter text-center text-4xl text-gray-900 dark:text-white font-bold">{props.name}</h3>
                        <p class="lg:mx-16 my-16 mx-3 whitespace-pre-line font-inter text-xl text-gray-900 dark:text-gray-100">
                            {props.description}
                        </p>
                    </div>
                </div>
            </div>

            <div onClick={() => {
                props.setPopup(null)
            }} class="bg-black dark:bg-gray-800 w-full h-full fixed opacity-25 cursor-pointer"/>
        </div>
    )

    const onClick: JSX.MouseEventHandler<HTMLDivElement> = () => {
        props.setPopup(popup);
    }

    return (
        <>
            <div onClick={onClick} class={"cursor-pointer align-self-center items-center transition-all rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg flex items-center flex-col transform hover:rotate-2 hover:scale-110 p-8 border border-gray-100 dark:border-gray-900" + extraClasses}>
                <img class="w-full rounded-md" src={"/assets/" + props.image + "/1.png"}/>
                <div class="text-center font-inter text-gray-900 mt-2 -mb-4 dark:text-gray-100">{props.name}</div>
            </div>
        </>
    )
}

export default Product;

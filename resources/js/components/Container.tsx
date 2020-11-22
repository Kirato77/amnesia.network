import { FunctionComponent, h } from "preact";

interface ContainerProps {
    class?: string,
}

const Container: FunctionComponent<ContainerProps> = (props) => {

    return (
        <div class={'md:w-4/6 mx-auto ' + props.class}>
            {props.children}
        </div>
    )
}

export default Container;

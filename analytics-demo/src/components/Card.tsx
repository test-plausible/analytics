import { JSX } from "solid-js";

type CardProps = {
    header: string;
    children?: JSX.Element
}

export default function Card(props: CardProps) {
    return (
        <div
            class="bg-white p-4 text-center shadow-md"
        >
            <h2 class="text-2xl">{props.header}</h2>

            <p>{props.children}</p>

            <button class="btn">Click me!</button>
        </div>
    );

}
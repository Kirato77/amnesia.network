require("./bootstrap");

import { InertiaApp } from '@inertiajs/inertia-react';
import { render, h } from 'preact'

document.addEventListener("DOMContentLoaded", function(){
    if (matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add("dark")
    }
});

const el = document.getElementById('app')!;

render(
    <InertiaApp
        initialPage={JSON.parse(el.dataset.page!)}
        resolveComponent={(name: string) => import(`./page/${name}`).then(module => module.default)}
    />,
    el
)

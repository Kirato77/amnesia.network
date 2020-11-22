<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class StoreController extends Controller {

    public function __invoke() {
        return Inertia::render("Store", ['products' => config('amnesia.products')]);
    }
}

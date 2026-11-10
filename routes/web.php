<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'charts')->name('home');

/*Route::get('/charts', function () {
    return Inertia::render('charts');
});*/


<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// We are going to use this class to render React components // Nous allons utiliser cette classe pour rendre les composants React

Route::get('/{path?}', function () {
    return Inertia::render('Routes'); // This will get component Test.jsx from the resources/js/Pages/Test.jsx // Cela obtiendra le composant Test.jsx à partir des ressources/ js/Pages/Test.jsx
});

Route::get('/Contact', [ContactController::class, 'create'])->name('contact.create');

Route::post('/Contact', [ContactController::class, 'contact'])->name('contact');
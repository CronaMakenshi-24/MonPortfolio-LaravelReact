<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="description"
          content="Christophe Mestdagh: J'ai fait une reconversion professionnelle et j’ai obtenu le Titre Professionnel de Niveau 5 en Développeur Web et Web Mobile. Avant j’étais dans l’électrotechnique. Je recherche une alternance en Développeur Symfony PHP ou Emploi et, en parallèle, je me lance en Freelance.">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Fetch project name dynamically -->
    <title inertia>{{ 'Mon portfolio : Christophe Mestdagh ' }}</title>
    <link rel="icon" href="{{ asset('/images/goldfishfish.svg') }}">
    <!-- Scripts -->
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx']) @inertiaHead
</head>
<body class="font-body  bg-neutral-950 antialiased ">
@inertia
<div class="absolute w-full">
    <h6 class='2xl:hidden bottom-1 border p-2  text-center text-white inset-x-4'>
        Christophe Mestdagh - Copyright 2023
    </h6>
</div>
</body>
</html>

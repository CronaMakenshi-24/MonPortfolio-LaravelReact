<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Mon portfolio :Email</title>
</head>
<style>
    body {
        background-color: black;;
        color: #fff;
    }
    div{
        text-align: center;
    }
    ul {
        display: inline-block;
        text-align: left;
    }
    h1 {
        font-size:3em;
        padding: 2rem;
        border: 5px solid;
        text-align: center;
    }
    h2 {
        text-align: center;
        font-size:  2.5em;
    }
    p {
        font-size: 2em;
        text-align: center;
    }
</style>
<body>
<h1 class="">Demande de contact sur mon portfolio</h1>
<div>
<ul>
    <li>
        Nom : {{ $data['name'] }}
    </li>
    <li>
        E-mail : {{ $data['email'] }}
    </li>
</ul>
</div>
<h2>**Message :**</h2>
<p>
    {{ $data['message'] }}
</p>

</body>
</html>





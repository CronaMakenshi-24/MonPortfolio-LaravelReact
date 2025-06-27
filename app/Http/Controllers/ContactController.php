<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Mail\ContactMail;
use App\Models\Contact;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function __construct()
    {
    }

    public function contact(ContactRequest $request)
    {
        $contact = Contact::create($request->validated());
        Mail::send(new ContactMail($request->validated()));
        return back()->with('success', 'Merci de m\'avoir contacté');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('contact', [
            $contact = new Contact,
        ]);
    }
}

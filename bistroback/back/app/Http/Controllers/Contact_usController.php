<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class Contact_usController extends Controller
{
    //

    public function store_contact_us_data(Request $request){
        return  Contact::create([
            'email' => $request->email,
            'subject' => $request->subject,
            'name' => $request->name,
            'messege' => $request->messege,


        ]);
    }
}

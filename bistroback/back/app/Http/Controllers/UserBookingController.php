<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserBookingController extends Controller
{
    public function store_reservation(Request $request)
    {
        //    dd($request->user_id);
        return  Booking::create([
            'date' => $request->date,
            'time' => $request->phone,
            'name' => $request->name,
            'phone' => $request->phone,
            'user_id' => $request->user_id,
            'total_person' => $request->totperson


        ]);
    }
    public function get_user_reservations(Request $request,$id){
        $bookings = Booking::where('user_id',$id)->get();
        $context=[
            'bookings'=>$bookings
        ];

     return $context;
    }
}

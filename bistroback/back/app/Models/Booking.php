<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;
    protected $fillable = [

        'time',
        'date',
        'name',
        'status',
        'phone',
        'user_id',
        'total_person'
    ];
    public function  booking_user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
    public function  admin_accept_booking()
    {
        return $this->belongsTo(User::class, 'user_id', 'id')->where('status', 1)->get();
    }
}

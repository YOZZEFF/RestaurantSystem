<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;
    protected $fillable = [

        'title',
        'description',
        'image',
        'user_id',


    ];
    public function  admin_write_blog(){
        return $this->belongsTo(User::class,'user_id','id')->where('status',1)->get();
    }
}

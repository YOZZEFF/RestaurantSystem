<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'price',
        'image',
        'description',
        'user_id',
        'category_id'
    ];
    public function getProducts()
    {

        return $this->belongsTo(Cateogry::class, 'category_id', 'id')->get();
    }
    public function Admin_add_product()
    {

        return $this->belongsTo(User::class, 'user_id', 'id')->where('status',1)->get();
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class DisplayblogController extends Controller
{
    //
    public function get_blogs()
    {
        $blogs = Blog::all()->take(12);
        $context = [
            'blogs' => $blogs
        ];
        return $context;
    }
}

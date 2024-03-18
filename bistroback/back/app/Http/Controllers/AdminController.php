<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function get_users(Request $request)
    {
        $users = User::all();

        $context = [
            'users' => $users
        ];
        return $context;
    }
    public function get_resrvations(Request $request)
    {
        $bookings = Booking::all();

        $context = [
            'bookings' => $bookings
        ];
        return $context;
    }

    public function resrvation_validation(Request $request, $id)
    {

        $book = Booking::find($id);
        return $book->update(['status' => $request->status]);
    }
    public function get_all_products(Request $request)
    {

        $products = Product::all();
        $context = [
            'products' => $products
        ];
        return $context;
    }
    public function  add_product(Request $request)
    {

        Product::create([
            'title' => $request->title,
            'price' => $request->price,
            'image' => $request->image,
            'description' => $request->description,
            'user_id' => $request->user_id,
            'category_id' => $request->category_id
        ]);
        return response()->json(['messege' => 'Product Added Successfully']);

    }

    public function get_data_of_single_product(Request $request, $id)
    {
        $product = Product::find($id);

        return $product;
    }


    public function  update_product(Request $request, $id)
    {

        $product = Product::find($id);


            $product->update([
            'title' => $request->title ?? $product->title,
            'price' => $request->price ?? $product->price,
            'image' => $request->image ?? $product->image,
            'description' => $request->description ?? $product->description,
            'category_id' => $request->category_id ?? $product->category_id,
            'user_id' => $request->user_id ?? $product->user_id
        ]);


            return response()->json(['messege' => 'Product Updated Successfully']);

    }

    public function  delete_product(Request $request, $id)
    {
        $product = Product::find($id);
        $product->delete();
        return response()->json([
            'status' => 'success',
            'messege' => 'Deleted Successfully'
        ]);
    }
}

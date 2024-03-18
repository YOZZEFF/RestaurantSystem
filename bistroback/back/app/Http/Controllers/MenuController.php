<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    //
    public function get_Cateogries_products(Request $request, $id)
    {
        $prods = Product::where('category_id', $id)->take(8)->get();



        $context = [
            'data' => $prods,
        ];
        return $context;
    }
    public function get_all_menu(Request $request)
    // all products in cateogry (all)
    {
        $prods = Product::all()->take(8);



        $context = [
            'data' => $prods,
        ];
        return $context;
    }

    public function get_product_of_menu_all(Request $request, $id)
    // single product
    {
        $product = Product::find($id);

        return $product;
    }
    public function get_product_of_menu_cateogry(Request $request, $product_id, $id)
    // single product
    {
        $product = Product::find($id);
        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }

        // return response()->json($product);
        return $product;
    }
}

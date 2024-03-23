<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Contact_usController;
use App\Http\Controllers\UserBookingController;
use App\Http\Controllers\DisplayblogController;
use App\Http\Controllers\InfoUserUpdateController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\AdminController;
use App\Http\Middleware\VerifyToken;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
//     return $request->user();
// });
// Auth
Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);
Route::get('users', [AuthController::class, 'getusers']);

// Route::middleware(['auth:sanctum'])->group(function () {

// menu
Route::get('menu/all/{id}', [MenuController::class, 'get_Cateogries_products']);
Route::get('menu/allprod', [MenuController::class, 'get_all_menu']);
// get single product of cateogries
Route::get('menu/all/{id}/{product_id}', [MenuController::class, 'get_product_of_menu_cateogry']);
// get single product of all button  (random cateogries)
Route::get('menu/allprod/{id}', [MenuController::class, 'get_product_of_menu_all']);
// });


// Blogs
Route::get('pages', [DisplayblogController::class, 'get_blogs']);
//  store booking
Route::post('booking', [UserBookingController::class, 'store_reservation']);
// display  reservations of user
Route::get('/get_reservations/{id}', [UserBookingController::class, 'get_user_reservations']);
// store contacts data
Route::post('contact', [Contact_usController::class, 'store_contact_us_data']);
Route::post('info_update/{id}', [InfoUserUpdateController::class, 'user_info_updating']);
//Start  Admin zone
Route::get('admin/users', [AdminController::class, 'get_users']);
Route::get('admin/resrvations', [AdminController::class, 'get_resrvations']);
Route::post('admin/resrvations_validation/{id}', [AdminController::class, 'resrvation_validation']);
// CRUD operations
Route::get('admin/products', [AdminController::class, 'get_all_products'])->name('prod');
Route::get('admin/products/{id}', [AdminController::class, 'get_data_of_single_product']);
Route::post('admin/addproduct/', [AdminController::class, 'add_product']);
Route::put('admin/updateproduct/{id}', [AdminController::class, 'update_product']);
Route::post('admin/deleteproduct/{id}', [AdminController::class, 'delete_product']);
    // End Admin zone

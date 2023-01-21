<?php

namespace App\Http\Controllers;

use App\Models\CouponCode;
use Illuminate\Http\Request;

class CouponCodeController extends Controller
{
    public function enterCouponCodeName(Request $request){
        $attr = $request->validate([
            'coupon_code_name' => 'required',
        ]);

        $couponCodeName = CouponCode::create([
            'coupon_code_name' => $attr['coupon_code_name'],
        ]);

        return response(['success' => true]);
    }

    public function getCouponCode(){
        $code = CouponCode::first();
        return response($code);
    }
}

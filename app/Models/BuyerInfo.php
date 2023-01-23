<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BuyerInfo extends Model
{
    use HasFactory;
    protected $fillable = [
        "name",
        "surname",
        "email",
        "country",
        "price",
        "address",
        "city",
        "state",
        "postal_code"
    ];
}

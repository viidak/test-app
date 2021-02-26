<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Callback;

class Comment extends Model
{
    use HasFactory;
    protected $guarded = [];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'callback_id',
        'description',
    ];

    public function callback()
    {
        return $this->belongsTo(Callback::class, 'callback_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Comment;
use App\Models\User;

class Callback extends Model
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
        'order_number',
        'description',
        'date_time',
        'is_archived',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function comments()
    {
        return $this->hasMany(Comment::class, 'callback_id')->with('user', 'callback');
    }

    public function getDateFormattedAttribute()
    {
        return \Carbon\Carbon::parse($this->created_at)->format('Y/m/d h:i a');
    }
}

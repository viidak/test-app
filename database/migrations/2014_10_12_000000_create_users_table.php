<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        try {
            Schema::create('users', function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->string('last_name')->nullable();
                $table->string('user_name')->unique();
                $table->string('email')->unique()->nullable();
                $table->string('phone', 11);
                $table->enum('gender', ['male', 'female', 'other'])->default('other');
                $table->timestamp('email_verified_at')->nullable();
                $table->string('password');
                $table->enum('user_role', ['admin', 'user', 'guest'])->default('guest');
                $table->rememberToken();
                $table->timestamps();
            });

            $now = \Carbon\Carbon::now();

            $data = array(
                array(
                    'name' => 'admin',
                    'last_name' => 'user',
                    'user_name' => 'adminuser',
                    'email' => 'admin@user.com',
                    'phone' => '1231231230',
                    'gender' => 'male',
                    'email_verified_at' => $now,
                    'password' => Hash::make('admin123'),
                    'user_role' => 'admin',
                    'created_at' => $now,
                    'updated_at' => $now,
                ),
                array(
                    'name' => 'user',
                    'last_name' => 'user',
                    'user_name' => 'useruser',
                    'email' => 'user@user.com',
                    'phone' => '1234561230',
                    'gender' => 'female',
                    'email_verified_at' => $now,
                    'password' => Hash::make('admin123'),
                    'user_role' => 'user',
                    'created_at' => $now,
                    'updated_at' => $now,
                )
            );

            DB::table('users')->insert($data);
        } catch (\Exception $e) {
            $this->down();
            return $e->getMessage();
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCallbackTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        try {
            Schema::create('callbacks', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('user_id'); 
                $table->index('user_id');
                $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
                $table->string('order_number')->nullable();
                $table->text('description');
                $table->dateTime('date_time');
                $table->boolean('is_archived')->default(false);
                $table->timestamps();
            });

            Schema::create('comments', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('user_id');
                $table->index('user_id');
                $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
                $table->unsignedBigInteger('callback_id'); 
                $table->index('callback_id');
                $table->foreign('callback_id')->references('id')->on('callbacks')->onDelete('cascade');
                $table->text('description');
                $table->timestamps();
            });
        } catch (\Exception $e) {
            $e->getMessage();
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
        Schema::table('callbacks', function (Blueprint $table) {
            $table->dropForeign('callbacks_user_id_foreign');
            $table->dropIndex('callbacks_user_id_index');
            $table->dropColumn('user_id');
        });

        Schema::table('comments', function (Blueprint $table) {
            $table->dropForeign('comments_user_id_foreign');
            $table->dropIndex('comments_user_id_index');
            $table->dropColumn('user_id');
            $table->dropForeign('comments_callback_id_foreign');
            $table->dropIndex('comments_callback_id_index');
            $table->dropColumn('callback_id');
        });

        Schema::dropIfExists('callbacks', 'comments');
    }
}

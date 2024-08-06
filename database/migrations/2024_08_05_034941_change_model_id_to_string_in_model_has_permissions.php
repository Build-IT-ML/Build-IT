<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeModelIdToStringInModelHasPermissions extends Migration
{
    public function up()
    {
        Schema::table('model_has_permissions', function (Blueprint $table) {
            $table->uuid('model_id')->change();
        });
    }

    public function down()
    {
        Schema::table('model_has_permissions', function (Blueprint $table) {
            $table->bigInteger('model_id')->change();
        });
    }
}

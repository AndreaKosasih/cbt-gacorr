<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class RenameNisnToNpmInStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('students', function (Blueprint $table) {
            // Gunakan DB::statement untuk mengganti nama kolom
            DB::statement('ALTER TABLE students CHANGE COLUMN nisn npm VARCHAR(255)');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('students', function (Blueprint $table) {
            // Gunakan DB::statement untuk mengganti nama kolom kembali
            DB::statement('ALTER TABLE students CHANGE COLUMN npm nisn VARCHAR(255)');
        });
    }
}

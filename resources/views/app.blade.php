<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title inertia>{{ config('app.name') }}</title>
    <meta property="og:description"
        content='Build-IT (Basic Understanding in learn & developing Information Technology) merupakan suatu kegiatan HMTI yang memiliki tujuan untuk memberikan pelatihan kepada mahasiswa baru khususnya materi tentang algoritma pemrograman dan konsep basis data. Build-IT tahun 2020 mengusung tema "Start
        Your Journey With New Lesson and Building Self Creativity", yang bermakna sebagai panduan konsep dasar teknologi
        informasi, guna memulai perjalanan dengan ilmu baru dan membentuk kreatifitas diri dalam menghadapi era industri
        5.0. Rangkaian kegiatan Build-IT tahun ini dimulai dari rangkaian sharing session dari salah satu alumni
        Teknologi Informasi Universitas Udayana yaitu Kak I Putu Gede Mayu Krisnawan, alumni TI angkatan tahun 2012,
        yang sharing tentang bagiamana pengalaman bekerja di industri IT, serta prospek kerja di industri IT, kemudian
        dilanjutkan dengan pemberian materi dalam pelatihan konsep dasar algoritma pemrograman, Jaringan Komputer dan konsep basis data.
        Build-IT.'>
    <meta property="og:instagram" content="">

    <!-- Apple Touch Icon -->
    <link rel="apple-touch-icon" sizes="76x76" href="{{ asset('asset/images/faicon-76x76.png') }}">
    <!-- Regular Favicon -->
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('asset/images/faicon-32x32.png') }}">
    <!-- Large Favicon -->
    <link rel="icon" type="image/png" sizes="96x96" href="{{ asset('asset/images/faicon-96x96.png') }}">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet">

    <!-- Scripts -->
    {{-- @routes --}}
    @viteReactRefresh

    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>

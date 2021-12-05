#!/usr/bin/perl -w

use CGI qw(:standard -debug);
use CGI::Carp qw(fatalsToBrowser);
print header();


$output = param("outputTune");

$out="zxczxc";
print<<EOP;
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Temporary Play</title>
    <script src="temp_play.js"></script>

    <link rel="stylesheet" href="VirtualPiano.css">

</head>

<body>
    
    <tr id="temp1">ASDFGHZXC</text><input type="button" value="Play"  id="temp_play1" ><br>
    <text id="temp2">ASDFGHZXC</text><input type="button" value="Play"  id="temp_play2" ><br>
    <text id="temp3">ZXCVBN</text><input type="button" value="Play"  id="temp_play3" ><br>

    <text id="temp4">XCFGHCVB</text><input type="button" value="Play"  id="temp_play4" onclick="playtext($out)"><br>


</body>
</html>
<h2>Thank you for saving the song!</h2>
<p><a href='index.html'>Back to Form</a></p>
EOP

$file= "savedTunes.out"; 
open(OUT,">>$file") || die "can't write to $file";
print OUT "$output\n";
close(OUT);



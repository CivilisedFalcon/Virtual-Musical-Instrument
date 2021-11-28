#!/usr/bin/perl -w

use CGI qw(:standard -debug);
use CGI::Carp qw(fatalsToBrowser);
print header();


$output = param("outputTune");


print<<EOP;
<h2>Thank you for saving the song!</h2>
<p><a href='index.html'>Back to Form</a></p>
EOP

$file= "savedTunes.out"; 
open(OUT,">>$file") || die "can't write to $file";
print OUT "$output\n";
close(OUT);



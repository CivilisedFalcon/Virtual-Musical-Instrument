#!"C:\xampp\perl\bin\perl.exe"

use warnings;
use CGI qw(:standard);
use CGI::Carp qw(fatalsToBrowser);
print header();

$data = param("avi");

print<<ENDTAG;
<h2>Your avatar has been saved!</h2>
<p><a href='myprofile.cgi'>Back to My Profile</a></p>
ENDTAG

$file= "savedAvatars.out";
open(OUT,">>$file") || die "can't write to $file";
print OUT "$data\n";
close(OUT);

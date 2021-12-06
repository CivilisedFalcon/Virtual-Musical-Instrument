#!/usr/bin/perl

use warnings;
use CGI qw(:standard);
use CGI::Carp qw(fatalsToBrowser);

print header();

$username="Pink";
$topsong ="lovesong";

#Read file to find user's avatar (what to display?)
$file="savedAvatars.out";
open(FILE,"savedAvatars.out") || die "cannot open file";
while(<FILE>)
{
	#print $_; # echo line read
	# looking for username to associate with profile pic
	$line = $_;
	if ($line == $username){
		print $line;
	}
	$readline=<IN>;
	@line=split(/\Q$delim\E/,$readline);

	#if($line == #topliked ){
	#	$topsong = #topliked;
	#}

}
close(FILE);

print <<ENDTAG;
<html>
	<head>
		<link rel ="stylesheet" href="profile_style.css">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta charset="UTF-8"><title>My Profile</title>
		<link rel="icon" href="avatar1.jpg">

		<!--* Scripts to preview&save user's image depending on their selection *-->
		<script>
			<!-- "avatar" is the image id of main,big image on left; (a) holds which avatarButton was pressed -->
			function changePic(a) {
				document.getElementById("avatar").src=a;
			}
		</script>

	</head>

	<body style="padding:20px">
		<h2 style='text-align: center;'>$username 's Profile</h2>

			<div class="row">
				<div style="display: inline-block">

					<!-- left hand side of the page -->
					<div class="left">
							<!--Create a card of the user's profile picture and name in "main section"-->
							<div class="polaroid" style="width: 400px; ">
								<img id="avatar" src="avatar1.jpg">            <!-- <<<<<<<<<<<<<<<<<ADD AVATAR VAR<<<<<<<<<<<-->
								<div class="cardtext">
									<h3>$username</h3>
								</div>
							</div>

							<!-- Top Liked section -->
							<div id="rcorners3">
								<h3 style='text-align: center;'> $username 's Top Tune: </h3>

							</div>
					</div>

					<!-- the right hand side of the page-->
					<div style="display: inline-block">
						<div style="padding:50px">

							<!-- Profile pic selection: an unordered list of buttons with images inside -->
							<div id="rcorners">
								<h3>Preview Avatars</h3>
								<br>
								<div id="scroll">
								<ul>
									<div class="selector">
									<li><button onclick='changePic("avatar1.jpg");'><img src="avatar1.jpg"><span>Swag</span></button></li>
									<li><button onclick='changePic("avatar2.jpg");'><img src="avatar2.jpg"><span>Pink</span></button></li>
									<li><button onclick='changePic("avatar7.jpg");'><img src="avatar7.jpg"><span>Blue</span></button></li>
									<li><button onclick='changePic("avatar3.jpg");'><img src="avatar3.jpg"><span>Frog</span></button></li>
									<li><button onclick='changePic("avatar4.jpg");'><img src="avatar4.jpg"><span>Crown</span></button></li>
									<li><button onclick='changePic("avatar5.jpg");'><img src="avatar5.jpg"><span>Chain</span></button></li>
									<li><button onclick='changePic("avatar6.jpg");'><img src="avatar6.jpg"><span>Fairy</span></button></li>
									</div>
								</ul>
								</div>
								<br>

								<!-- form to save user's selection -->
								<form action="avatarSaved.cgi" method="get">
									<div style='padding:10px;'>
										<h3>Select your Avatar:</h3>

										<input type="radio" value="Swag" id="avatar1" name="avi">
										<label for="avatar1">Swag</label>
										<input type="radio" value="Pink" id="avatar2" name="avi">
										<label for="avatar2">Pink</label>
										<input type="radio" value="Blue" id="avatar7" name="avi">
										<label for="avatar7">Blue</label>
										<input type="radio" value="Frog" id="avatar3" name="avi">
										<label for="avatar3">Frog</label>
										<input type="radio" value="Crown" id="avatar4" name="avi">
										<label for="avatar4">Crown</label>
										<input type="radio" value="Chain" id="avatar5" name="avi">
										<label for="avatar5">Chain</label>
										<input type="radio" value="Fairy" id="avatar6" name="avi">
										<label for="avatar6">Fairy</label>
									</div>
						    	<input class="sbutton" type="submit" value="Save" id="save">
						  	</form>

							</div>

							<br>
							<hr>
							<br>
							
							<!-- Music Library Display -->
							<div id="rcorners2">
								<nav>
									<h3>Music</h3>
									<ol>

										<li><text id="1">"SONG NAME"</text> <button type="submit" style="float:right;"> Delete </button><button type="submit" style="float:right;"> Play </button></li>
										<hr>
										<li>"SONG NAME" <button type="submit" style="float:right;"> Delete </button><button type="submit" style="float:right;"> Play </button></li>
										<hr>
										<li>"SONG NAME" <button type="submit" style="float:right;"> Delete </button><button type="submit" style="float:right;"> Play </button></li>
										<hr>
										<li>"SONG NAME" <button type="submit" style="float:right;"> Delete </button><button type="submit" style="float:right;"> Play </button></li>
										<hr>
										<li>"SONG NAME" <button type="submit" style="float:right;"> Delete </button><button type="submit" style="float:right;"> Play </button></li>
										<hr>
										<li>"SONG NAME" <button type="submit" style="float:right;"> Delete </button><button type="submit" style="float:right;"> Play </button></li>
										<hr>
										<li>"SONG NAME" <button type="submit" style="float:right;"> Delete </button><button type="submit" style="float:right;"> Play </button></li>
										<hr>
										<li>"SONG NAME" <button type="submit" style="float:right;"> Delete </button><button type="submit" style="float:right;"> Play </button></li>
										<hr>
										<li>"SONG NAME" <button type="submit" style="float:right;"> Delete </button><button type="submit" style="float:right;"> Play </button></li>
										<hr>
										<li>"SONG NAME" <button type="submit" style="float:right;"> Delete </button><button type="submit" style="float:right;"> Play </button></li>
										<hr>

									</ol>
								</nav>
							</div>

						</div>
					</div>

				</div>
			</div>

	</body>

</html>

ENDTAG


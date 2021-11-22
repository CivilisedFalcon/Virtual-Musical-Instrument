#!"C:\xampp\perl\bin\perl.exe"

use warnings;
use CGI qw(:standard);
use CGI::Carp qw(fatalsToBrowser);

print header();

# set avatar
$default = "http://localhost/WebD/kyungpook/virtualinstrument/avatar1.jpg";
$avatar = param('avatar');

print <<ENDTAG;
<html>
	<style>
		* {
			box-sizing: border-box;
		}

		button{
			background-color: ;
		}

		#rcorners {
		  border-radius: 25px;
		  background: #D1F2EB;
		  padding: 50px;
		}

		#rcorners2 {
		  border-radius: 25px;
		  background: #D6EAF8;
		  padding: 50px;
		}

		/* Create "cards" for home page, responsive on mouse hover*/
		.polaroid {
		  /*width: 350px;*/
		  background-color: white;
		  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		  margin-bottom: 25px;
		}

		.cardtext {
		  text-align: center;
		  padding: 10px 20px;
		  color: black;
		}

		/* Remove underline from links */
		a:link {
		  text-decoration: none;
		}

		/* Divide page into "main section" on left and "side section" on the right
		.row {
			display: flex;
			flex-wrap: wrap;
		}

		.main {
			flex: 70%;
			padding: 55px;
		}

		.side {
			flex: 30%;
			padding: 50px;
		}

		/* Slider for images */
		#scroll {
			width:600px;
			height:210px;
			background:#A3CBE0;
			border:2px solid #000;
			overflow:auto;
			box-shadow:0 0 10px #000;
		}
		#scroll ul {
			float:left;
			margin-right:-999em;
			white-space:nowrap;
			list-style:none;
		}
		#scroll li {
			margin:15px;
			text-align:center;
			float:left;
			display:inline;
		}
		#scroll img {
			border:0;
			display:block;
			border:1px solid #A3CBE0;
			width:100px;
		}
		#scroll a:active img, #scroll a:focus img, #scroll a:hover img {
			border:1px solid #000;
		}
		#scroll a {
			text-decoration:none;
			font-weight:bold;
			color:#000;
		}
		#scroll a:active, #scroll a:focus, #scroll a:hover {
			color:#FFF;
		}
		#scroll span {
			padding:5px 0 0;

		}

		/* Scrollable list of user's songs */
		nav ol{
			height:200px;
			width:600px;
		}
		nav ol{
			overflow:hidden;
			overflow-y:scroll;
		}

	</style>

	<head>
		<link rel ="stylesheet" href="stylesheet.css">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta charset="UTF-8"><title>My Profile</title>
		<link rel="icon" href="$avatar">
	</head>

	<body style="padding:20px">
		<h2>Welcome, $username!</h2>

			<div class="row"> <!-- "row" holds the main and side sections on the same horizontal line -->
				<div style="display: inline-block">

					<div style="display: inline-block">
						<div class="main">
							<!--Create a card of the user's profile picture and name in "main section"-->
							<div class="polaroid" style="width: 400px;">
								<img src="$avatar">
								<div class="cardtext">
									<p>$username</p>
								</div>
							</div>
						</div>
					</div>

					<!-- the right hand side of the page-->
					<div style="display: inline-block">
						<div class="side" style="padding:50px">

							<!-- Profile pic selection -->
							<div id="rcorners">    <!-- puts green rounded background -->
								<div id="scroll">
								<ul>
									<div class="selector">
									<li><a href="#" id="avatar1"><img src="http://localhost/WebD/kyungpook/virtualinstrument/avatar1.jpg"><span>Cool</span></a></li>
									<li><a href="#" id="avatar2"><img src="http://localhost/WebD/kyungpook/virtualinstrument/avatar2.jpg"><span>Pink</span></a></li>
									<li><a href="#" id="avatar3"><img src="http://localhost/WebD/kyungpook/virtualinstrument/avatar3.jpg"><span>Frog</span></a></li>
									<li><a href="#" id="avatar4"><img src="http://localhost/WebD/kyungpook/virtualinstrument/avatar4.jpg"><span>Crown</span></a></li>
									<li><a href="#" id="avatar5"><img src="http://localhost/WebD/kyungpook/virtualinstrument/avatar5.jpg"><span>Chain</span></a></li>
									<li><a href="#" id="avatar6"><img src="http://localhost/WebD/kyungpook/virtualinstrument/avatar6.jpg"><span>Fairy</span></a></li>
									</div>
								</ul>
								</div>

								<br>
								<br>

								<!-- Drop down box to select avatar -->
								<p>Select your Avatar: </p>
								<form action = "http://localhost/WebD/kyungpook/virtualinstrument/myprofile.pl" method = "POST">
									<select name="pics" onchange="onSelect(this,'avatar');">
								  	<option value = "cool">Cool</option>
								    <option value = "frog">Pink</option>
										<option value = "crown">Crown</option>
										<option value = "chain">Chain</option>
										<option value = "fairy">Fairy</option>
								  </select>
								  <input type = "submit" value = "Submit">
								</form>

							</div>

							<br>
							<hr>
							<br>

							<!-- Music Library Display -->
							<div id="rcorners2">
								<nav>
									<p>My Music</p>
									<ol>
										<li>"SONG NAME1"  <button type="submit">Play</button> <button type="submit">Delete</button></li>
										<li>"SONG NAME2"  <button type="submit">Play</button> <button type="submit">Delete</button></li>
										<li>"SONG NAME3"  <button type="submit">Play</button> <button type="submit">Delete</button></li>
										<li>"SONG NAME4"  <button type="submit">Play</button> <button type="submit">Delete</button></li>
										<li>"SONG NAME5"  <button type="submit">Play</button> <button type="submit">Delete</button></li>
										<li>"SONG NAME6"  <button type="submit">Play</button> <button type="submit">Delete</button></li>
										<li>"SONG NAME7"  <button type="submit">Play</button> <button type="submit">Delete</button></li>
										<li>"SONG NAME8"  <button type="submit">Play</button> <button type="submit">Delete</button></li>
										<li>"SONG NAME9"  <button type="submit">Play</button> <button type="submit">Delete</button></li>
										<li>"SONG NAME10"  <button type="submit">Play</button> <button type="submit">Delete</button></li>
										<li>"SONG NAME11"  <button type="submit">Play</button> <button type="submit">Delete</button></li>
										<li>"SONG NAME12"  <button type="submit">Play</button> <button type="submit">Delete</button></li>
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

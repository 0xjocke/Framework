<!doctype html>
<html>
<head>
	<title>ALBATROS CSS FRAMEWORK</title>
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
	<link rel="stylesheet" type="text/css" href="css/albatros.css">
	<script src="js/Jquery-min.js" ></script>
	
	
</head>
<body>


<nav class="menubar fixed">
	<div class="container">
		<a><img src="logo.png"></a>
	<ul>
		<li>item01</li>
		<li class="active">item02</li>
		<li>item03</li>

			<ul><a>woop</a>
				<li>item01</li>
				<li>item02</li>
				<li>item03sadasdsadsadsad</li>
			</ul>
	</ul>
		
	</div>
</nav>

<div class="container">

<h3>How to use nav menubar</h3>
<pre class="codeblock">
	<span style=color:red>&lt;nav class="menubar"&gt;</span>
		<span style=color:red>&lt;ul&gt;</span>
			<span style=color:red>&lt;li&gt;</span>items<span style=color:red>&lt;/li&gt;</span>
		<span style=color:red>&lt;/ul&gt;</span>
	<span style=color:red>&lt;/nav&gt;</span>

	Use class right on ul for right elements

	<span style=color:red>&lt;ul class="right"&gt;</span>

	Use class fixed for floated menu on top of screen

	<span style=color:red>&lt;nav class="menubar fixed"&gt;</span>

	Put new <span style=color:red>&lt;ul&gt;</span> inside <span style=color:red>&lt;li&gt;</span> to get a drop down menu

	<span style=color:red>&lt;li&gt;</span>item
		<span style=color:red>&lt;ul&gt;</span>
			<span style=color:red>&lt;li&gt;</span>dropdown item<span style=color:red>&lt;/li&gt;</span>
		<span style=color:red>&lt;/ul&gt;</span>
	<span style=color:red>&lt;/li&gt;</span>
</pre><br><br><br>


	<div class="success">This is a successfull message!</div>
	<div class="error">This is an error message!</div>
	<div class="warning">This is a warning message!</div>
	<div class="notification">This is a notification message!</div>

<h3>How to use messages</h3>
<pre class="codeblock">
	<span style=color:red>&lt;div class="success"&gt;</span>This is a successfull message!<span style=color:red>&lt;/div&gt;</span>
	<span style=color:red>&lt;div class="error"&gt;</span>This is an error message!<span style=color:red>&lt;/div&gt;</span>
	<span style=color:red>&lt;div class="warning"&gt;</span>This is a warning message!<span style=color:red>&lt;/div&gt;</span>
	<span style=color:red>&lt;div class="notification"&gt;</span>This is a notification message!<span style=color:red>&lt;/div&gt;</span>
</pre><br><br><br>


	<button>Standard button</button>
	<button disabled>Disabled button</button>
	<button class="btn_hlight">Highlighted button</button>
	<button class="btn_red">Red button</button>
	<button class="btn_green">Green button</button>


<h3>How to use buttons</h3>
<pre class="codeblock">
	<span style=color:red>&lt;button&gt;</span>Standard button<span style=color:red>&lt;/button&gt;</span>
	<span style=color:red>&lt;button disabled&gt;</span>Disabled button<span style=color:red>&lt;/button&gt;</span>
	<span style=color:red>&lt;button class="btn_hlight"&gt;</span>Highlighted button<span style=color:red>&lt;/button&gt;</span>
	<span style=color:red>&lt;button class="btn_red"&gt;</span>Red button<span style=color:red>&lt;/button&gt;</span>
	<span style=color:red>&lt;button class="btn_green"&gt;</span>Green button<span style=color:red>&lt;/button&gt;</span>
</pre><br><br><br>

	<hr>
	<hr class="dotted">

<h3>How to use lines</h3>
<pre class="codeblock">
	<span style=color:red>&lt;hr&gt;</span>
	<span style=color:red>&lt;hr class="dotted"&gt;</span>
</pre><br><br><br>


	<h1>H1 headline</h1>
	<h2>H2 headline</h2>
	<h3>H3 headline</h3>
	<h4>H4 headline</h4>
	<h5>H5 headline</h5>
		
	<div class="bl1">1/1</div>
	<div class="bl2">1/2</div>
	<div class="bl2">1/2</div>

	<div class="bl3">1/3</div>
	<div class="bl3">1/3</div>
	<div class="bl3">1/3</div>

	<div class="bl4">1/4</div>
	<div class="bl4">1/4</div>
	<div class="bl4">1/4</div>
	<div class="bl4">1/4</div>

	<div class="bl5">1/5</div>
	<div class="bl5">1/5</div>
	<div class="bl5">1/5</div>
	<div class="bl5">1/5</div>
	<div class="bl5">1/5</div>

	<div class="bl6">1/6</div>
	<div class="bl6">1/6</div>
	<div class="bl6">1/6</div>
	<div class="bl6">1/6</div>
	<div class="bl6">1/6</div>
	<div class="bl6">1/6</div>

	<div class="bl7">1/7</div>
	<div class="bl7">1/7</div>
	<div class="bl7">1/7</div>
	<div class="bl7">1/7</div>
	<div class="bl7">1/7</div>
	<div class="bl7">1/7</div>
	<div class="bl7">1/7</div>

	<div class="bl8">1/8</div>
	<div class="bl8">1/8</div>
	<div class="bl8">1/8</div>
	<div class="bl8">1/8</div>
	<div class="bl8">1/8</div>
	<div class="bl8">1/8</div>
	<div class="bl8">1/8</div>
	<div class="bl8">1/8</div>

	<div class="bl9">1/9</div>
	<div class="bl9">1/9</div>
	<div class="bl9">1/9</div>
	<div class="bl9">1/9</div>
	<div class="bl9">1/9</div>
	<div class="bl9">1/9</div>
	<div class="bl9">1/9</div>
	<div class="bl9">1/9</div>
	<div class="bl9">1/9</div>

	<div class="bl10">1/10</div>
	<div class="bl10">1/10</div>
	<div class="bl10">1/10</div>
	<div class="bl10">1/10</div>
	<div class="bl10">1/10</div>
	<div class="bl10">1/10</div>
	<div class="bl10">1/10</div>
	<div class="bl10">1/10</div>
	<div class="bl10">1/10</div>
	<div class="bl10">1/10</div>

<h3>How to use blocks</h3>
<pre class="codeblock">
	<span style=color:red>&lt;div class="bl1"&gt;</span>1/1<span style=color:red>&lt;/div&gt;</span>
	<span style=color:red>&lt;div class="bl2"&gt;</span>1/2<span style=color:red>&lt;/div&gt;</span>
	<span style=color:red>&lt;div class="bl3"&gt;</span>1/3<span style=color:red>&lt;/div&gt;</span>
	etc.. up to bl10.
</pre><br><br><br>

		<br>
		
		<nav class="listMenu bl2">
			ClassicListMenu
			<ul>
				<li>testItem1</li>
				<li>testItem2</li>
				<li>testItem3</li>
				<li>testItem4</li>
			</ul>
		</nav>

		<nav class="listMenuRounded bl2">
			RoundedListMenu
			<ul>
				<li>testItem1</li>
				<li>testItem2</li>
				<li>testItem3</li>
				<li>testItem4</li>
			</ul>
		</nav>


<h3>How to use litemenus</h3>
<pre class="codeblock">
	<span style=color:red>&lt;nav class="listMenu"&gt;</span>
		<span style=color:red>&lt;ul&gt;</span>
			<span style=color:red>&lt;li&gt;</span>testItem<span style=color:red>&lt;/li&gt;</span>
		<span style=color:red>&lt;/ul&gt;</span>
	<span style=color:red>&lt;/nav&gt;</span>

	<span style=color:red>&lt;nav class="listMenuRounded"&gt;</span>
		<span style=color:red>&lt;ul&gt;</span>
			<span style=color:red>&lt;li&gt;</span>testItemRounded<span style=color:red>&lt;/li&gt;</span>
		<span style=color:red>&lt;/ul&gt;</span>
	<span style=color:red>&lt;/nav&gt;</span>
</pre><br><br><br>


	<article>
		<h3>Article</h3>
		<b>An article have justify alignment on text</b><br>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse  <a href="">congue</a> aliquet orci. Fusce in tristique tortor, a volutpat erat. In bibendum, quam in dignissim viverra, sem elit feugiat mi, vitae <a href="">aliquet</a> nunc elit ac urna. Pellentesque in magna pulvinar, consequat nulla non, rutrum nisl. Proin blandit massa nec dictum molestie. Cras lacinia, enim eu sollicitudin pretium, mauris est <a href="">malesuada</a> nibh, ut ultricies neque libero vel erat. Praesent hendrerit, nisi vulputate placerat imperdiet, lacus eros fringilla dui, ac aliquet nisi risus non neque. Aenean euismod sit amet turpis elementum semper.
	</article>

	<span class="infoTxt">
		InfoText, italic and gray.
	</span>

	<br>


	<div class="bl3"><img class="circle darkBorder center" src="example.jpg"></div>
	<div class="bl3"><img class="rounded lightBorder center" src="example.jpg"></div>
	<div class="bl3"><img class="darkBorder center" src="example.jpg"></div>
	<br>

<h3>How to use img</h3>
<pre class="codeblock">
	<span style=color:red>&lt;img class="circle darkBorder" src="example.jpg"&gt;</span><span style=color:red>&lt;/div&gt;</span>
	<span style=color:red>&lt;img class="rounded lightBorder" src="example.jpg"&gt;</span><span style=color:red>&lt;/div&gt;</span>
	<span style=color:red>&lt;img class="darkBorder" src="example.jpg"&gt;</span><span style=color:red>&lt;/div&gt;</span>
</pre><br><br><br>

	<h3>Forms</h3>
	<form>
		<label for="txt">FormLabel</label>
		<input type="text" id="txt">
		<label for="txtA">FormLabel</label>
		<textarea id="txtA"></textarea>

		<input type="text" disabled id="txt" value="Disabled">

		<label for="radio">RadioButton</label>
		<input type="radio" id="radio" name="radio" value="1">
		<input type="radio" id="radio" name="radio" value="1">

		
		
		<label for="check">checkbox</label>
		<input type="checkbox" id="check" value="1">

	</form>

<br>
<h3>Horizontal forms</h3>

	<form>
	<span class="bl20"><label for="txt1">FormLabel</label></span>
	<span class="bl80"><input type="text" id="txt1"></span>
	<span class="bl20"><label for="txt2">FormLabel</label></span>
	<span class="bl80"><input type="text" id="txt2"></span>
	<span class="bl20"><label for="txt3">FormLabel</label></span>
	<span class="bl80"><input type="text" id="txt3"></span>
	</form>


<h3>How to use forms</h3>
<pre class="codeblock">
	<span style=color:red>&lt;form&gt;</span>
		<span style=color:red>&lt;label for="txt"&gt;</span>FormLabel<span style=color:red>&lt;/label&gt;</span>
		<span style=color:red>&lt;input type="text" id="txt"&gt;</span>
	<span style=color:red>&lt;/form&gt;</span>
</pre><br><br><br>
<h3>Horizontal forms?</h3>
Put elements inside blocks with your required sizing (20% and 80%).
<pre class="codeblock">
	<span style=color:red>&lt;form&gt;</span>
		<span style=color:red>&lt;span class="bl20"&gt;</span><span style=color:red>&lt;label for="txt"&gt;</span>FormLabel<span style=color:red>&lt;/label&gt;</span><span style=color:red>&lt;/span&gt;</span>
		<span style=color:red>&lt;span class="bl80"&gt;</span><span style=color:red>&lt;input type="text" id="txt"&gt;</span><span style=color:red>&lt;/span&gt;</span>
	<span style=color:red>&lt;/form&gt;</span>
</pre><br><br><br>

</div>

<script type="text/javascript" src="js/albatros.js"></script>

</body>
</html>
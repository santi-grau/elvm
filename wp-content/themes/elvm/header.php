<!DOCTYPE html>
<!--[if lt IE 7]>	  <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>		 <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>		 <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
	<head>			
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title><?php wp_title( '|', true, 'right' ); ?></title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="profile" href="http://gmpg.org/xfn/11">
		<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
		<link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/normalize.css">
		<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
		<script src="<?php bloginfo('template_directory'); ?>/js/vendor/modernizr-2.6.2.min.js"></script>
	</head>


	<body>
		<header>
			<nav>
				<a href="/" id="logo"></a>
				<?php wp_nav_menu(  ); ?>
				<ul class="external-links">
					<li><a href="javascript:void(0)">Espace Culturel Louis Vuitton</a></li>
					<li><a href="javascript:void(0)">Espace Louis Vuitton Tokyo</a></li>
					<li><a href="javascript:void(0)">Louis Vuitton</a></li>
				</ul>
			</nav>
			<ul id="languages">
				<li><a href="/" class="<?php if (ICL_LANGUAGE_CODE == 'en'){ echo 'active'; } ?>">English</a> / </li>
				<li><a href="/de" class="<?php if (ICL_LANGUAGE_CODE == 'de'){ echo 'active'; } ?>">Deutsch</a></li>
			</ul>

			<div id="widget-box">
				<a href="search.html">
					<input type="text" placeholder="Search">
				</a>
				<a href="javascript:void(0)">Newsletter sign-up</a>
			</div>
		</header>
		<div id="main">










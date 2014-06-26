<?php get_header(); ?>

	<?php
		$pro_query = array(
			'post_type' => 'exhibits',
			'posts_per_page' => 1,
			'category_name' => 'current'
		);
		$projects = new WP_Query($pro_query);
		while ( $projects->have_posts() ) : $projects->the_post();
	?>

	<div id="videoCont">
		<div id="videoElements">
			<a id="teaser-title" href="exhibitions/current">
				<h2><?php the_title(); ?></h2>
				<p class="home-date">
					<?php
						$date1 = NULL;
						$date2 = NULL;
						if(get_field('date_from')) { $date1 = DateTime::createFromFormat('Ymd',get_field('date_from')); }
						if(get_field('date_to')) { $date2 = DateTime::createFromFormat('Ymd',get_field('date_to')); } 
						if(isset($date1) && isset($date2)){
							if($date1->format('Y') == $date2->format('Y')){
								echo $date1->format('F d').' - '.$date2->format('F d').', '.$date2->format('Y');
							}else{
								echo $date1->format('F d, Y').' - '.$date2->format('F d, Y');
							}
						}else{
							echo $date1->format('F d, Y');
						}
						$time1 = NULL;
						$time2 = NULL;
						if(get_field('time_from')) { $time1 = substr(get_field('time_from'),0,2).':'.substr(get_field('time_from'),-2); }
						if(get_field('time_to')) { $time2 = substr(get_field('time_to'),0,2).':'.substr(get_field('time_to'),-2); }
						if(isset($time1) && isset($time2)){
							echo '<br />';
							echo $time1 .'-'. $time2;
						}else if(isset($time1)){
							echo '<br />';
							echo $time1;
						}
					?>
				</p>
			</a>
			<h3 class="teaser-gallery"><a href="home.html">Espace Louis Vuitton München</a></h3>
		</div>
	</div>

	<?php if(get_field('featured_video')){ ?>
		<a href="javascript:void(0)" id="feat_video" data-autoplay="true" data-url="<?php the_field('featured_video'); ?>"><span class="play-img"></span></a>
	<?php } ?>
	<?php
		endwhile;
	?>
<?php get_footer(); ?>¡
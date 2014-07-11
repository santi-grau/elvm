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

	<a href="exhibitions/current" id="videoCont">
		<div id="videoElements">
			<span id="teaser-title">
				<h2><?php the_field('teaser_content'); ?></h2>
				<p class="home-date">
					<?php
						$date1 = NULL;
						$date2 = NULL;
						if(get_field('date_from')) { $date1 = DateTime::createFromFormat('Ymd',get_field('teaser_start_date')); }
						if(get_field('date_to')) { $date2 = DateTime::createFromFormat('Ymd',get_field('teaser_end_date')); } 
						if(isset($date1) && isset($date2)){
							if($date1->format('Y') == $date2->format('Y')){
								echo $date1->format('F d').' - '.$date2->format('F d').', '.$date2->format('Y');
							}else{
								echo $date1->format('F d, Y').' - '.$date2->format('F d, Y');
							}
						}else{
							echo $date1->format('F d, Y');
						}
					?>
				</p>
			</span>
			<h3 class="teaser-gallery"><a href="home.html">Espace Louis Vuitton München</a></h3>
		</div>
	</a>

	<?php if(get_field('featured_video')){ ?>
		<a href="javascript:void(0)" id="feat_video" data-autoplay="true" data-url="<?php the_field('teaser_video'); ?>"><span class="play-img"></span></a>
	<?php } ?>
	<?php
		endwhile;
	?>
<?php get_footer(); ?>¡
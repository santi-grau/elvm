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
	<?php if(get_field('featured_video')){ ?>
		<a href="javascript:void(0)" id="feat_video" data-autoplay="true" data-url="<?php the_field('featured_video'); ?>"><span class="play-img"></span></a>
	<?php } ?>
	<?php
		endwhile;
	?>
<?php get_footer(); ?>¡
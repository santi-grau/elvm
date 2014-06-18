<?php get_header(); ?>
	<?php
		$pro_query = array(
			'post_type' => 'exhibits',
			'posts_per_page' => 1,
			'order' => 'DESC',
			'orderby' => 'date'
		);
		$projects = new WP_Query($pro_query);
		while ( $projects->have_posts() ) : $projects->the_post();
	?>
	<?php if(get_field('featured_video')){ ?>
		<a href="javascript:void(0)" id="feat_video" data-url="<?php the_field('featured_video'); ?>" onload="alert('a');" ><span class="play-img"></span></a>
	<?php } ?>
	<h1><?php the_title(); ?></h1>
	<?php the_content(); ?>
	<?php
		endwhile;
	?>
<?php get_footer(); ?>
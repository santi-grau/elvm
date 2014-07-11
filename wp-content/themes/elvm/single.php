<?php get_header(); ?>
	<?php if(get_field('featured_video')){ ?>
		<a href="javascript:void(0)" id="feat_video" data-url="<?php the_field('featured_video'); ?>" ><span class="play-img"></span></a>
	<?php } ?>
	<h1><?php the_title(); ?></h1>
	<?php 
		while ( have_posts() ) : the_post();
		the_content();
		endwhile;  
	?>
<?php get_footer(); ?>
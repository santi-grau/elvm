<?php get_header(); ?>
<h1><?php the_title(); ?></h1>
<?php 
	while ( have_posts() ) : the_post();
	the_content();
	endwhile;  
?>
<ul class="download-list">
<?php
	$pro_query = array(
		'post_type' => 'press',
		'posts_per_page' => -1,
		'order' => 'ASC',
		'orderby' => 'menu_order'
	);
	$projects = new WP_Query($pro_query);
	while ( $projects->have_posts() ) : $projects->the_post();
?>
	<!-- Press article -->
	<li>
		<?php if(get_field('press_attachment')) { ?>
			<a href="<?php the_field('press_attachment'); ?>" target="_blank">
		<?php }else{ ?>
			<a href="http://<?php the_field('press_url'); ?>" target="_blank">
		<?php } ?>
			<?php the_content(); ?><?php if(get_field('press_attachment')) { ?><span class="pdf-icon"></span><?php } ?>
		</a>
		
	</li>
	<!-- / End Press article -->
<?php
	endwhile;
?>
</ul>
<?php get_footer(); ?>
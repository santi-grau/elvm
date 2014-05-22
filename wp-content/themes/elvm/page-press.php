<?php get_header(); ?>
<h1><?php the_title(); ?></h1>
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
		<a href="<?php the_field('press_attachment'); ?>" target="_blank">
			<?php the_content(); ?>
		</a>
		<?php if(get_field('press_attachment')) { ?>
			<a href="<?php the_field('press_attachment'); ?>" target="blank" class="pdf-icon"></a>
		<?php }; ?>
	</li>
	<!-- / End Press article -->
<?php
	endwhile;
?>
</ul>
<?php get_footer(); ?>
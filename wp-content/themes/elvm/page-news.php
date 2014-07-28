<?php get_header(); ?>		
<div class="c2 clearfix" style="position: relative; height: 790px;">
<?php
	$pro_query = array(
		'post_type' => 'news',
		'posts_per_page' => -1,
		'order' => 'DESC',
		'orderby' => 'date'
	);
	$projects = new WP_Query($pro_query);
	while ( $projects->have_posts() ) : $projects->the_post();
?>
	<!-- News article -->
	<article class="calendar-article">
		<div class="article-header">
			<div class="article-header-info">
				<p class="article-date"><?php the_date(); ?></p>
			</div>
			<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
		</div>
		<?php
			the_field('post_excerpt');
		?>
	</article>
	<!-- / End News article -->
<?php
	endwhile;
?>
</div>
<?php get_footer(); ?>
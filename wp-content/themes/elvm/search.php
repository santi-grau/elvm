<?php get_header(); ?>
<h1 class="page-title"><?php printf( __( 'Search Results for: %s', 'twentyfourteen' ), get_search_query() ); ?></h1>
<?php if ( have_posts() ) : ?>
	<?php while ( have_posts() ) : the_post(); ?>
		<p><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></p>
	<?php endwhile; ?>
<?php else : ?>
	No results
<?php endif; ?>
<?php get_footer(); ?>
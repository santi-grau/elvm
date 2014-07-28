<?php get_header(); ?>
<h1 class="page-title"><?php printf( __( 'Search Results for: %s', 'twentyfourteen' ), get_search_query() ); ?></h1>
<?php if ( have_posts() ) : ?>
	<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a><br>
<?php else : ?>
	No results
<?php endif; ?>
<?php get_footer(); ?>
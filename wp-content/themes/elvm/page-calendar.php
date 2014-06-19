<?php get_header(); ?>		
<div class="c2 clearfix" style="position: relative; height: 790px;">
<?php
	$pro_query = array(
		'post_type' => 'calendar',
		'posts_per_page' => -1,
		'order' => 'ASC',
		'orderby' => 'menu_order'
	);
	$projects = new WP_Query($pro_query);
	while ( $projects->have_posts() ) : $projects->the_post();
?>
	<!-- News article -->
	<article class="calendar-article" style="position: absolute; left: 276px; top: 0px;">
		<div class="article-header">
			<div class="article-header-info">
				<p class="article-date">
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

			</div>
			<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
		</div>
		<?php
			global $more;
			$more = 0;
			the_content( '', '' );
		?>
	</article>
	<!-- / End News article -->
<?php
	endwhile;
?>
</div>
<?php get_footer(); ?>
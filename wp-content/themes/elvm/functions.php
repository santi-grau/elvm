<?php
	function custom_post_types() {
		$labels = array(
			'name' => _x('Exhibitions', 'post type general name'),
			'singular_name' => _x('Exhibition', 'post type singular name'),
			'add_new' => _x('New exhibition', 'Proyecto'),
			'add_new_item' => __('New exhibition'),
			'edit_item' => __('Edit exhibition'),
			'new_item' => __('New exhibition'),
			'all_items' => __('All exhibitions'),
			'view_item' => __('See exhibitions'),
			'search_items' => __('Search exhibitions'),
			'not_found' =>  __('No exhibitions found'),
			'not_found_in_trash' => __('No exhibitions found'), 
			'parent_item_colon' => __( 'Parent Item:', 'text_domain' ),
			'menu_name' => 'Exhibitions'
		);
		$args = array(
			'labels' => $labels,
			'public' => true,
			'publicly_queryable' => true,
			'taxonomies' => array( 'category' ),
			'show_ui' => true, 
			'show_in_menu' => true, 
			'query_var' => true,
			'rewrite' => true,
			'capability_type' => 'post',
			'has_archive' => false, 
			'hierarchical' => false,
			'menu_icon' => '',
			'supports' => array()
		);
		register_post_type('exhibits',$args);
	
		$labels = array(
			'name' => _x('Calendar', 'post type general name'),
			'singular_name' => _x('Event', 'post type singular name'),
			'add_new' => _x('New event', 'Proyecto'),
			'add_new_item' => __('New event'),
			'edit_item' => __('Edit event'),
			'new_item' => __('New event'),
			'all_items' => __('All events'),
			'view_item' => __('See events'),
			'search_items' => __('Search events'),
			'not_found' =>  __('No events found'),
			'not_found_in_trash' => __('No events found'), 
			'parent_item_colon' => __( 'Parent Item:', 'text_domain' ),
			'menu_name' => 'Calendar'
		);
		$args = array(
			'labels' => $labels,
			'public' => true,
			'publicly_queryable' => true,
			'taxonomies' => array( ),
			'show_ui' => true, 
			'show_in_menu' => true, 
			'query_var' => true,
			'rewrite' => true,
			'capability_type' => 'post',
			'has_archive' => false, 
			'hierarchical' => false,
			'menu_icon' => '',
			'supports' => array()
		);
		register_post_type('calendar',$args);
	
		$labels = array(
			'name' => _x('Press', 'post type general name'),
			'singular_name' => _x('Article', 'post type singular name'),
			'add_new' => _x('New article', 'Proyecto'),
			'add_new_item' => __('New article'),
			'edit_item' => __('Edit article'),
			'new_item' => __('New article'),
			'all_items' => __('All articles'),
			'view_item' => __('See articles'),
			'search_items' => __('Search articles'),
			'not_found' =>  __('No articles found'),
			'not_found_in_trash' => __('No articles found'), 
			'parent_item_colon' => __( 'Parent Item:', 'text_domain' ),
			'menu_name' => 'Press'
		);
		$args = array(
			'labels' => $labels,
			'public' => true,
			'publicly_queryable' => true,
			'taxonomies' => array( ),
			'show_ui' => true, 
			'show_in_menu' => true, 
			'query_var' => true,
			'rewrite' => true,
			'capability_type' => 'post',
			'has_archive' => false, 
			'hierarchical' => true,
			'menu_icon' => '',
			'supports' => array()
		);
		register_post_type('press',$args);
	

		$labels = array(
			'name' => _x('News', 'post type general name'),
			'singular_name' => _x('Article', 'post type singular name'),
			'add_new' => _x('New article', 'Proyecto'),
			'add_new_item' => __('New article'),
			'edit_item' => __('Edit article'),
			'new_item' => __('New article'),
			'all_items' => __('All articles'),
			'view_item' => __('See articles'),
			'search_items' => __('Search articles'),
			'not_found' =>  __('No articles found'),
			'not_found_in_trash' => __('No articles found'), 
			'parent_item_colon' => __( 'Parent Item:', 'text_domain' ),
			'menu_name' => 'News'
		);
		$args = array(
			'labels' => $labels,
			'public' => true,
			'publicly_queryable' => true,
			'taxonomies' => array( ),
			'show_ui' => true, 
			'show_in_menu' => true, 
			'query_var' => true,
			'rewrite' => true,
			'capability_type' => 'post',
			'has_archive' => false, 
			'hierarchical' => false,
			'menu_icon' => '',
			'supports' => array()
		);
		register_post_type('news',$args);
		flush_rewrite_rules();
	}

	function register_my_menu() {
		register_nav_menu('header-menu',__( 'Header Menu' ));
	}
	
	function register_my_custom_menu_page(){
		$page = get_page_by_title( 'home' );
		add_menu_page( 'home-page', 'Home', 'manage_options', '/post.php?post='.$page->ID.'&action=edit', '0', 'dashicons-admin-home', 6 );
		$page = get_page_by_title( 'About' );
		add_menu_page( 'about-page', 'About', 'manage_options', '/post.php?post='.$page->ID.'&action=edit', '0', 'dashicons-format-quote', 7 );
		$page = get_page_by_title( 'visit' );
		add_menu_page( 'visit-page', 'Visit', 'manage_options', '/post.php?post='.$page->ID.'&action=edit', '0', 'dashicons-location', 8 );
		add_menu_page( 'exhibitions-page', 'Exhibitions', 'manage_options', '/edit.php?post_type=exhibits', '0', ' dashicons-images-alt', 9 );
		add_menu_page( 'calendar-page', 'Calendar', 'manage_options', '/edit.php?post_type=calendar', '0', 'dashicons-calendar', 10 );
		$page = get_page_by_title( 'education' );
		add_menu_page( 'education-page', 'Education', 'manage_options', '/post.php?post='.$page->ID.'&action=edit', '0', 'dashicons-welcome-learn-more', 11 );
		add_menu_page( 'press-page', 'Press', 'manage_options', '/edit.php?post_type=press', '0', 'dashicons-tagcloud', 12 );
		add_menu_page( 'news-page', 'News', 'manage_options', '/edit.php?post_type=news', '0', 'dashicons-star-empty', 13 );
	}

	add_action( 'init', 'custom_post_types' );
	add_action( 'init', 'register_my_menu' );
	add_action( 'admin_menu', 'register_my_custom_menu_page' );


	global $current_user;
	get_currentuserinfo();
	if ( $current_user->data->user_nicename !== 'admin' ) {
		add_action('admin_head', 'admin_head');
		function admin_head(){
			echo '<link rel="stylesheet" href="'.get_bloginfo( 'template_directory' ).'/adminstyles.css" >';
		};
	}
?>
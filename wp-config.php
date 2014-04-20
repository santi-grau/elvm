<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'elvm');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', '127.0.0.1');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '&1 ]5Jq{v1&dwsSuS?+g`N~kzW?@_Q9A#u{pmJ^D5n/d9h~.WbvKFAi%7!AbX:`Z');
define('SECURE_AUTH_KEY',  '~o@%_:}<?Oom;KS:GH9wBHRG:kl7/a/.{=+{PNL43;qHdI]!+~Y>3*gCHRjX0Ha<');
define('LOGGED_IN_KEY',    ';K#K<okmP~zVxkJ|z`uRSOQ>u_8q_|5(L4e|$^(FhM:aCe--|||<z_XE&q<kBgu&');
define('NONCE_KEY',        '0)+}1$Z#]{+pda,ks#q1rFZd$I6?PW5oh6,WjeGN3@|2.j>Z5ZS+SRd}j1qZF:^Z');
define('AUTH_SALT',        '*0;`t&(TXG8`pb0eVF^`AE;]F]_+l,O_B/:r0+N`K,g.|3&Bls9sVZx0,s|+ddAy');
define('SECURE_AUTH_SALT', '-Mi-l.8?q+-@;vkl[9uWs`N-g|GA|@Kz3>}xXfTg_ce:,(X+]aiD&3fm{6?HioAL');
define('LOGGED_IN_SALT',   ' 3!0vd:*UX- gh?P$@6udf;-=`{wGR]41Xw=rx1Ug8&G-&=-rSvrxekt:/$G*b-/');
define('NONCE_SALT',       '6?.;mpG({Hx+[Vj9S%_6W30_B(K+U,{u@z8R7&7/9N?!JW%U]ZV;p1^-eH^xl?8 ');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

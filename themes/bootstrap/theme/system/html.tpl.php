<?php
/**
 * @file
 * Default theme implementation to display the basic html structure of a single
 * Drupal page.
 *
 * Variables:
 * - $css: An array of CSS files for the current page.
 * - $language: (object) The language the site is being displayed in.
 *   $language->language contains its textual representation.
 *   $language->dir contains the language direction. It will either be 'ltr' or
 *   'rtl'.
 * - $rdf_namespaces: All the RDF namespace prefixes used in the HTML document.
 * - $grddl_profile: A GRDDL profile allowing agents to extract the RDF data.
 * - $head_title: A modified version of the page title, for use in the TITLE
 *   tag.
 * - $head_title_array: (array) An associative array containing the string parts
 *   that were used to generate the $head_title variable, already prepared to be
 *   output as TITLE tag. The key/value pairs may contain one or more of the
 *   following, depending on conditions:
 *   - title: The title of the current page, if any.
 *   - name: The name of the site.
 *   - slogan: The slogan of the site, if any, and if there is no title.
 * - $head: Markup for the HEAD section (including meta tags, keyword tags, and
 *   so on).
 * - $styles: Style tags necessary to import all CSS files for the page.
 * - $scripts: Script tags necessary to load the JavaScript files and settings
 *   for the page.
 * - $page_top: Initial markup from any modules that have altered the
 *   page. This variable should always be output first, before all other dynamic
 *   content.
 * - $page: The rendered page content.
 * - $page_bottom: Final closing markup from any modules that have altered the
 *   page. This variable should always be output last, after all other dynamic
 *   content.
 * - $classes String of classes that can be used to style contextually through
 *   CSS.
 *
 * @see bootstrap_preprocess_html()
 * @see template_preprocess()
 * @see template_preprocess_html()
 * @see template_process()
 *
 * @ingroup themeable
 */
?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML+RDFa 1.0//EN"
  "http://www.w3.org/MarkUp/DTD/xhtml-rdfa-1.dtd">
<html lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"<?php print $rdf_namespaces;?>>
<head profile="<?php print $grddl_profile; ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
  <meta name="fragment" content="!">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, height=viewport-height">
  <meta name="google-site-verification" content="SBYFBO6sZv5-QsdCdeTDfdKT4M2bqesp6A_q8WNxwK0" />
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta></head>
  <link rel="apple-touch-icon" sizes="57x57" href="/sites/all/themes/bootstrap/images/favicon/apple-touch-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="/sites/all/themes/bootstrap/images/favicon/apple-touch-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="/sites/all/themes/bootstrap/images/favicon/apple-touch-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="/sites/all/themes/bootstrap/images/favicon/apple-touch-icon-76x76.png">
  <link rel="icon" type="image/png" href="/sites/all/themes/bootstrap/images/favicon/favicon-32x32.png" sizes="32x32">
  <link rel="icon" type="image/png" href="/sites/all/themes/bootstrap/images/favicon/favicon-96x96.png" sizes="96x96">
  <link rel="icon" type="image/png" href="/sites/all/themes/bootstrap/images/favicon/favicon-16x16.png" sizes="16x16">
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>

    <!-- fonts -->
    <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
    <link href='/sites/all/fonts/fonts.css' rel='stylesheet' type='text/css'>
    <link href='//fonts.googleapis.com/css?family=Open+Sans:700,600,400,300' rel='stylesheet' type='text/css'>
    <link href='//fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Ultra' rel='stylesheet' type='text/css'>

    <!--[if IE]>
    <link rel="stylesheet" type="text/css" href="/<?php echo $directory; ?>/css/style-ie.css" />
    <![endif]-->

    <!--<link rel="stylesheet" type="text/css" href="/<?php echo $directory; ?>/css/arrows.css" />-->

  <?php print $styles; ?>
  <!-- HTML5 element support for IE6-8 -->
  <!--[if lt IE 9]>
    <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
  <?php print $scripts; ?>
  <script src="//c.shpg.org/303/sp.js"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body class="<?php print $classes; ?>" <?php print $attributes;?>>
<script src="/sites/all/themes/bootstrap/js/tags.js"></script>
  <div id="skip-link">
    <a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
  </div>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>
</body>
</html>

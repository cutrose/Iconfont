/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'bb-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-icons_menu': '&#x78;',
		'icon-icons_account': '&#x61;',
		'icon-icons_bag': '&#x62;',
		'icon-icons_beautybayb': '&#x42;',
		'icon-icons_brands': '&#x74;',
		'icon-icons_home': '&#x68;',
		'icon-icons_mybeauty': '&#x6d;',
		'icon-icons_register': '&#x72;',
		'icon-icons_search': '&#x73;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());

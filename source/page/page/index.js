/**
 * @file  {{name}}.js
 * @copyright  2017 | Medlinker
 * @date  {{date}}
 */
define( [
	'{{view}}',
	'Model',
	'text!./tpl.layout.html',
    'text!StylePath/common.css',
	'text!./style.css'
], function (
	{{view}},
	Model,
	template,
	commonstyle
	style
) {
	// 变量初始化

	return _.inherit({{view}}, {
		propertys: function($super){
			$super();
			
			this.style = style;
			this.commonstyle = commonstyle;

		}
	})
} );

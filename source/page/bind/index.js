/**
 * @file  {{name}}.js
 * @copyright  2017 | Medlinker
 * @date  {{date}}
 */
define([
    'CommonPath/bind.view',
    'Model',
    'text!./tpl.layout.html',
    'text!StylePath/common.css',
    'text!./style.css'
], function(
    BindView,
    Model,
    template,
    commonstyle,
    style
) {
    // 变量初始化

    return BindView.$extend({
        propertys: function($super) {
            $super();

            this.style = style;
            this.commonstyle = commonstyle;
            this.template = template;
        },
        data: function() {
            return {

            }
        },
        methods: {

        }
    })
});
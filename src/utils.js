/**
 * Created by ekersale on 08/11/2016.
 */

import $ from 'jquery';

class Loader {

    constructor() {
        this.templates = {};
    }

    loadTemplates(names, callback) {
        let that = this;
        let loadTemplate = function (index) {
            let name = names[index];
            $.get('./templates/' + name + '.html', function (data) {
                that.templates[name] = data;
                index++;
                if (index < names.length) {
                    loadTemplate(index);
                } else {
                    callback();
                }
            });
        };
        loadTemplate(0);
    }

    get(name) {
        return this.templates[name];
    }

    initStyles() {
        $.fn.extend({
            animateCssIn: function (animationName) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                this.addClass('animated ' + animationName).one(animationEnd, function() {
                    $(this).removeClass('animated ' + animationName);
                });
            },
            animateCssOut: function (animationName, destinationModal) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                this.addClass('animated ' + animationName).one(animationEnd, function() {
                    destinationModal.show();
                });
            },
        });
    }
}

export default new Loader;
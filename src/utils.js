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
            $.get('./src/templates/' + name + '.html', function (data) {
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
}

export default new Loader;
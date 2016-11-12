/**
 * Created by ekersale on 08/11/2016.
 */

import Loader from '../utils';
import * as Backbone from 'backbone';
import * as _ from 'underscore';
import $ from 'jquery';
import Object3D from '../models/object';

require('../../sass/SettingsBox.scss');

class SettingsBoxView extends Backbone.View {

    get template() {
        return _.template(Loader.templates.SettingsBox);
    }

    get $el() {
        return $('.SettingsBoxSelector');
    }

    get events() {
        return {
            'click .openSettings': 'OpenCloseBox',
            'keyup input': 'changed',
            'change input': 'changed',
            'mousewheel input': 'inputWheel'
        };
    }

    constructor() {
        super();
        this.model = new Object3D();
        this.listenTo(this.model, 'all', this.render);
        _.bindAll(this, 'changed');
        this.render();
    }

    changed(event) {
        var string = event.target.attributes['data-name'].value;
        var elem = string.split('.');
        this.model.attributes[elem[0]][elem[1]][elem[2]] = parseInt($(event.target).val());
        console.log(this.model);
    }

    inputWheel(event, delta) {
        var string = event.target.attributes['data-name'].value;
        var elem = string.split('.');
        if (delta > 0) {
            this.model.attributes[elem[0]][elem[1]][elem[2]] = parseInt($(event.target).val()) + 1;
            console.log(this.model.attributes[elem[0]][elem[1]][elem[2]]);
        } else {
            this.model.attributes[elem[0]][elem[1]][elem[2]] = parseInt($(event.target).val()) - 1;
        }
    }

    render() {
        var that = this;
        this.$el.html(this.template({transformations: that.model.get('transformations')}));
        return this;
    }

    isToolBoxOpen() {
        return ($(".Box").css("visibility") == 'visible') ? true : false;
    }

    CloseBox() {
        $(".openSettings i").addClass("fa-spin");
        $( ".Box" ).fadeOut( 800, function() {
            $( ".Box" ).css('visibility', 'hidden');
            $(".openSettings i").removeClass("fa-spin");
        });
    }

    OpenBox() {
        $(".openSettings i").addClass("fa-spin");
        $( ".Box" ).css('visibility', 'visible');
        $( ".Box" ).fadeIn( 800, function() {
            $(".openSettings i").removeClass("fa-spin");
        });
    }

    OpenCloseBox() {
        if (this.isToolBoxOpen())
            this.CloseBox();
        else
            this.OpenBox();
        console.log(this.model)
    }
}

export default SettingsBoxView;
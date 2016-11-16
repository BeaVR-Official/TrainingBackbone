/**
 * Created by Nicolas on 11/17/2016.
 */

import Loader from '../utils';
import * as Backbone from 'backbone';
import * as _ from '../../node_modules/underscore';
import AuthModal from './AuthModalView';
import $ from 'jquery';

class ProjectSelectionModalView extends Backbone.View {

    get template() {
        return _.template(Loader.templates.ProjectSelectionModal);
    }

    get events() {
        return {
            'click #disconnect_button' : 'openAuthModal'
        };
    }

    get $el() {
        return $('.ModalSelector');
    }

    constructor() {
        super({
            events: {}
        });
        Loader.initStyles();
    }

    openAuthModal() {
        var modal = new AuthModal();
        $('#project_selection_modal').animateCssOut('fadeOutLeft', modal);
    }

    initialize() {}

    show() {
        this.render();
        $('#project_selection_modal').animateCssIn('fadeInLeft');
    }

    render() {
        this.$el.html(this.template());
        return this;
    }
}

export default ProjectSelectionModalView;
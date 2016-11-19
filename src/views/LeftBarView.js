/**
 * Created by napsters on 18/11/2016.
 */

import Loader from '../utils';
import * as Backbone from 'backbone';
import * as _ from '../../node_modules/underscore';
import $ from 'jquery';

import ContainerObject from '../views/ContainerObjectView';
import ModalSelectFile from '../views/ModalSelectFileView';

import ItemLeftMenu from '../models/ItemLeftMenu';
import LeftMenuCollection from  '../collections/LeftMenuCollection';

require('../../sass/LeftBar.scss');

class LeftBarView extends Backbone.View {

    get template() {

        return _.template(Loader.templates.LeftBar);
    }

    get events() {
        return {
            'click #item1' : 'openContainerObject',
            'click #item2' : 'addFile',
        };
    }

    get $el() {
        return $('.LeftBarSelector');
    }

    openContainerObject() {

        var container = new ContainerObject();
        container.render();

        //Backbone.View.WebkitTransition.fadeIn();
        //$('.ModalSelectFile');//.modal('show'); //.show() .animateCssOut('fadeOutLeft', modal);
    }

    addFile(){
       var modal = new ModalSelectFile();
        modal.render();
        // /$('.ModalSelectFile').modal('show')//.show() .animateCssOut('fadeOutLeft', modal);
    }

    constructor() {

        super({
            events: {}
        });

        Loader.initStyles();

        let itemsMenu = [];

        itemsMenu.push(new ItemLeftMenu({id: 1, name: 'Three View', logo: 'list icon', isUsed:true}));
        itemsMenu.push(new ItemLeftMenu({id: 2, name: 'Topics', logo: 'cubes icon', isUsed:true}));
        itemsMenu.push(new ItemLeftMenu({id: 3, name: 'Settings', logo: 'puzzle icon', isUsed:true}));
        itemsMenu.push(new ItemLeftMenu({id: 4, name: 'Ajouter', logo: 'plus square outline icon', isUsed:true}));

        this.menu = new LeftMenuCollection(itemsMenu);


        this.render();
    }

    render() {
        this.$el.html(this.template({
            menu: this.menu.toJSON()
        }));
        return this;
    }

    /*render() {
        this.$el.html(this.template());
        return this;
    }*/
}

export default LeftBarView;

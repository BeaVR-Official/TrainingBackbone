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

        var SurfboardsCollection = Backbone.Collection.extend({
            model: ItemLeftMenu
        });

        var Surfboard = Backbone.Model.extend({
            defaults: {
                id: 1,
                logo: '',
                name: 'Test 1'
            }
        });

        var board1 = new Surfboard({
            id: 1,
            logo: '',
            name: 'item 1'
        });

        var board2 = new Surfboard({
            id: 2,
            logo: '',
            name: 'item 2'
        });


        var item1 = new ItemLeftMenu();


        var Surfboards = new SurfboardsCollection;
        Surfboards.add(board1);
        Surfboards.add(board2);
        //var collection =



        this.render();
    }


    render() {
        this.$el.html(this.template());
        return this;
    }
}

export default LeftBarView;

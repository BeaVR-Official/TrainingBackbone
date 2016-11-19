/**
 * Created by napsters on 18/11/2016.
 */

import Loader from '../utils';
import * as Backbone from 'backbone';
import * as _ from '../../node_modules/underscore';
import $ from 'jquery';

import Item from '../models/ItemMenu';
import ItemMenuCollection from '../collections/ItemMenuCollection';


require('../../sass/ContainerObject.scss');

class ContainerObjectView extends Backbone.View {

    get template() {

        return _.template(Loader.templates.ContainerObject);
    }

    get events() {
        return {
        };
    }

    get $el() {
        return $('.ContainerObjectSelector');
    }


    constructor() {

        super({
            events: {}
        });

        let objectByCategorie = [];
        var i = 1;

         while (i < 10){
             objectByCategorie.push(new Item({id: 1, name: 'Three View', logo: 'list icon', category: '', modelPath: '', isUsed:true, isMadeByUser:''}));
             objectByCategorie.push(new Item({id: 1, name: 'Three View 2', logo: 'list icon', category: '', modelPath: '', isUsed:true, isMadeByUser:''}));
             objectByCategorie.push(new Item({id: 1, name: 'Three View 3', logo: 'list icon', category: '', modelPath: '', isUsed:true, isMadeByUser:''}));
             objectByCategorie.push(new Item({id: 1, name: 'Three View 4', logo: 'list icon', category: '', modelPath: '', isUsed:true, isMadeByUser:''}));
             objectByCategorie.push(new Item({id: 1, name: 'Three View 5', logo: 'list icon', category: '', modelPath: '', isUsed:true, isMadeByUser:''}));

             objectByCategorie.push(new Item({id: 1, name: 'Three View 6', logo: 'list icon', category: '', modelPath: '', isUsed:true, isMadeByUser:true}));
             objectByCategorie.push(new Item({id: 1, name: 'Three View 7', logo: 'list icon', category: '', modelPath: '', isUsed:true, isMadeByUser:true}));
             objectByCategorie.push(new Item({id: 1, name: 'Three View 8', logo: 'list icon', category: '', modelPath: '', isUsed:true, isMadeByUser:true}));
             objectByCategorie.push(new Item({id: 1, name: 'Three View 9', logo: 'list icon', category: '', modelPath: '', isUsed:true, isMadeByUser:true}));
             i++;
         }

        this.object = new ItemMenuCollection(objectByCategorie);

        this.render();
    }

    render() {
        this.$el.html(this.template({
            object: this.object.toJSON()
        }));
        return this;
    }

    /*render() {
        this.$el.html(this.template());
        return this;
    }*/
}

export default ContainerObjectView;

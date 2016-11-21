import Loader from '../utils';
import * as Backbone from 'backbone';
import * as _ from '../../node_modules/underscore';

require('../../sass/TopBar.scss');

class ObjectMenuView extends Backbone.View {

    get template() {
        return _.template(Loader.templates.TopBar);
    }

    get $el() {
        return $('.TopBarSelector');
    }

    get events() {
        return {
            'dblclick #scene-tabs .tab' : 'allowRenameTab',
            'click .edit' : 'renameTab',
            'click .close-cross': 'closeTab',
            'click .add-tab': 'addTab',
            'click .project-tab': 'showProjectInformations'
        };
    }

    constructor() {
        super();
        this.render();
    }

    initialize() {
        this.tabArray = [];
    }

    render() {
        this.$el.html(this.template());
        return this;
    }

    // To delete when not useful anymore
    generateTabId() {
        return Math.floor((Math.random() * 100000) + 1);
    }

    addTab() {
        // Prendre en param les choses requises.
        var newTabId = this.generateTabId();

        // TEMP
        var newTabName = newTabId;

        var tabsDiv = $('#scene-tabs');
        tabsDiv[0].innerHTML = tabsDiv[0].innerHTML
            + '<a class=\"item tab\" data-tab=\"tab-'
            + newTabId
            +'\">'
            + '<div class=\"ui disabled transparent input\">'
            + '<input type=\"text\" class=\"tab-input\" value=\"' + newTabName + '\">'
            + '<i class=\"hidden edit icon\"></i>'
            + '</div>'
            + '<span class=\"close-cross\">x</span></a>';

        var contentDiv = $('#content');
        contentDiv[0].innerHTML = contentDiv[0].innerHTML
            + '<div class=\"ui bottom attached tab segment\" data-tab=\"tab-'
            + newTabId
            +'\">Contenu de l\'onglet ' + newTabId
            + '</div>';

        $('.menu .item').tab();
    }

    closeTab(ev) {

        var nodeList = Array.prototype.slice.call($('#scene-tabs')[0].children);
        var i = nodeList.indexOf(ev.target.parentElement);

        ev.target.parentElement.remove();

        if (nodeList.length <= 1)
            $('.project-tab').click();
        else {
            if ((i + 1) == nodeList.length)
                $('#scene-tabs')[0].children[i - 1].click();
            else
                $('#scene-tabs')[0].children[i].click();
        }

        $('.menu .item').tab();
    }

    showProjectInformations() {
        console.log("TODO Later.");
    }

    allowRenameTab(ev) {
        if (ev.target.classList.contains("disabled")) {
            ev.target.classList.remove("disabled");
            ev.target.children[1].classList.remove("hidden");
        }
    }

    renameTab(ev) {
        ev.target.classList.add("hidden");
        ev.target.parentElement.classList.add("disabled");

        var input = ev.target.parentElement.children[0];

        var newName = input.value;

        input.defaultValue = newName;
        input.style.width = ((input.value.length + 1) * 8) + "px";

        console.log(newName);

    }
}

export default ObjectMenuView;
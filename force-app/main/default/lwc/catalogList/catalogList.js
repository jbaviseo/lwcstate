import { LightningElement, api } from 'lwc';

export default class CatalogList extends LightningElement {
    // Drilled down from shoppingApp -> catalogList -> itemTile
    @api catalogItems = [];
}
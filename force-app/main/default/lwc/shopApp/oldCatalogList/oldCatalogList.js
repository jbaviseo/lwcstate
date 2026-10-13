import { LightningElement, api } from 'lwc';

export default class OldCatalogList extends LightningElement {
    // Drilled down from shoppingApp -> catalogList -> itemTile
    @api catalogItems = [];
}
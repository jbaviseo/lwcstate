import { LightningElement, api } from 'lwc';

export default class OldControllerPassthrough extends LightningElement {
    @api passthroughValue = 0;
}
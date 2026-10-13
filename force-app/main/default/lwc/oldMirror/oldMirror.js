import { LightningElement, api } from 'lwc';
export default class OldMirror extends LightningElement {
    @api mirrorValue = 0; // Requires prop drilling
}
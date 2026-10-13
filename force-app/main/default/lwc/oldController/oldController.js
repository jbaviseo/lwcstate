import { LightningElement } from 'lwc';

export default class OldController extends LightningElement {
    value = 0;

    handleClick() {
        this.value += 1;
        
        // Dispatch custom event with bubbles and composed enabled
        this.dispatchEvent(new CustomEvent('increment', {
            detail: { newValue: this.value },
            bubbles: true,
            composed: true
        }));
    }
}
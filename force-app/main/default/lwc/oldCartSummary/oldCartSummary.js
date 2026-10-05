import { LightningElement, api } from 'lwc';

export default class OldCartSummary extends LightningElement {
    // Received via prop drilling from shoppingApp
    @api totalItems = 0;
    @api totalPrice = 0;
    @api isCartEmpty = false;

    // Dispatches standard CustomEvent up to shoppingApp
    handleClear() {
        const event = new CustomEvent('clearcart', {
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
    }
}
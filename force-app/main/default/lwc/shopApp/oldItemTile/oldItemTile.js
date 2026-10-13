import { LightningElement, api } from 'lwc';

export default class OldItemTile extends LightningElement {
    @api itemzz;

    handleAddClick() {
        const plainItem = {
            id: this.itemzz.id,
            name: this.itemzz.name,
            price: this.itemzz.price
        };

        const event = new CustomEvent('addtocart', {
            bubbles: true,
            composed: true, // Crosses Shadow DOM boundary up to shoppingApp
            detail: { item: plainItem }
        });
        this.dispatchEvent(event);
    }
}
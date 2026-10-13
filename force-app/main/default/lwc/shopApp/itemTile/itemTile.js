import { LightningElement, api } from 'lwc';

export default class ItemTile extends LightningElement {
    // Receives data via Prop Drilling from catalogList
    @api itemzz;

    handleAddClick() {
        const plainItem = {
            id: this.itemzz.id,
            name: this.itemzz.name,
            price: this.itemzz.price, // TODO: Add voerload or price generic component to display prices in diff currencies - child to ng itemTile - lagyan ng child na voucher component
        };

        // Event configured to bubble up through the DOM tree
        console.log('Item ITEMMMM ID :', this.itemzz.id);
        console.log('Item ITEMMMM NAME :', this.itemzz.name);
        console.log('Item ITEMMMM PRICE :', this.itemzz.price);

        const event = new CustomEvent('addtocart', {
            bubbles: true,
            composed: true, // Allows crossing Shadow DOM boundary
            detail: { item: plainItem }
        });
        this.dispatchEvent(event);
        console.log('after event dispatch 3');
    }
}
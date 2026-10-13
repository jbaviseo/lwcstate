import { LightningElement } from 'lwc';
import { fromContext } from '@lwc/state';
import cartStateManager from 'c/cartStateManager';

export default class ShoppingApp extends LightningElement {
    // Instantiate state manager (serves as Context Provider for descendants)
    cart = cartStateManager();
    // cart = fromContext(cartStateManager);
    products = [
        { id: '1', name: 'Salesforce Laptop', price: 1200 },
        { id: '2', name: 'Trailhead Hoodie', price: 60 }
    ];

    // Catch bubbled event from c-item-tile
    handleAddToCartEvent(event) {
        console.log('CARTTTT 3: ' , this.cart);
        const item = event.detail.item;
        console.log('ITEM FROM EVENT 2: ', event.detail.item.name);
        console.log('CART VALUE? : ', this.cart.value);
        console.log('CART additem? : ', this.cart.addItem);
        // Update state manager from event handler
        this.cart.value.addItem(item);
        console.log('DID WE ADD AN ITEM? ');
    }
}
import { LightningElement } from 'lwc';
import { fromContext } from '@lwc/state';
import cartStateManager from 'c/cartStateManager';

export default class CartSummary extends LightningElement {
    // Connect directly to the state manager instance
    cart = fromContext(cartStateManager);

    // Access properties directly on this.cart — do NOT use .value
    get totalItems() {
        console.log('CART SUMMARY ', this.cart);
        console.log('CART SUMMARY VALUE', this.cart.value);
        console.log('CART SUMMARY TOTALCOUNT', this.cart.totalCount);

        return this.cart?.value.totalCount ?? 0;
    }

    get totalPrice() {
        return this.cart?.value.totalPrice ?? 0;
    }

    get isCartEmpty() {
        return !this.cart?.value.items || this.cart?.value.items.length === 0;
    }

    handleClear() {
        // Invoke actions directly on this.cart
        this.cart?.value.clearCart();
    }
}
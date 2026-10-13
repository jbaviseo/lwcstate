import { LightningElement } from 'lwc';

export default class OldShoppingApp extends LightningElement {
    products = [
        { id: '1', name: 'Salesforce Laptop', price: 1200 },
        { id: '2', name: 'Trailhead Hoodie', price: 60 }
    ];

    cartItems = [];

    get totalItems() {
        return this.cartItems.reduce((sum, item) => sum + item.qty, 0);
    }

    get totalPrice() {
        return this.cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
    }

    get isCartEmpty() {
        return this.cartItems.length === 0;
    }

    // Handles 'addtocart' event from itemTile
    handleAddToCartEvent(event) {
        const newItem = event.detail.item;
        const existingIndex = this.cartItems.findIndex((i) => i.id === newItem.id);

        if (existingIndex > -1) {
            this.cartItems = this.cartItems.map((item, index) => {
                if (index === existingIndex) {
                    return { ...item, qty: item.qty + 1 };
                }
                return item;
            });
        } else {
            this.cartItems = [...this.cartItems, { ...newItem, qty: 1 }];
        }
    }

    // Handles 'clearcart' event from cartSummary
    handleClearCartEvent() {
        this.cartItems = [];
    }
}
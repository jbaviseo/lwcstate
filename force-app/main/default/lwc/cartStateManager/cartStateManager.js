import { defineState } from '@lwc/state';

const cartStateManager = defineState(({ atom, computed, setAtom }) => {
    // 1. ATOMS: Raw reactive primitives
    const items = atom([]);
    
    // 2. COMPUTED: Derived values that recalculate automatically
    const totalCount = computed([items], (currentItems) => {
        return currentItems.reduce((sum, item) => sum + item.qty, 0);
    });

    const totalPrice = computed([items], (currentItems) => {
        return currentItems.reduce((sum, item) => sum + item.price * item.qty, 0);
    });

    // 3. ACTIONS: The only allowed way to update atoms
    const addItem = (newItem) => {
        console.log('CART STATE MANAGER items: ', items);
        console.log('CART STATE MANAGER items.value: ', items.value);
        const current = items.value;
        const existingIndex = current.findIndex((i) => i.id === newItem.id);

        if (existingIndex > -1) {
            const updated = [...current];
            updated[existingIndex].qty += 1;
            setAtom(items, updated);
        } else {
            setAtom(items, [...current, { ...newItem, qty: 1 }]);
        }
    };

    const clearCart = () => setAtom(items, []);

    // Expose public API
    return {
        items,
        totalCount,
        totalPrice,
        addItem,
        clearCart
    };
});

export default cartStateManager;
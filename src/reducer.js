
export const initialState = {
    
    basket: [],
};
// selector
export const getBasketTotal = (basket) => (basket?.reduce((amount, item) => item.price + amount, 0));


const reducer = (state, action) => {

    console.log('action in reducer : ',action);
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            // remove all the same item
            /*return {
                ...state,
                basket: state.basket.filter(item => 
                    item.id !== action['item'].id)
            }*/
            // remove single item
           const index = state.basket.findIndex((basketItem) => 
                basketItem.id === action.item.id);

            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            else {
                console.warn(`Cant remove product (id: ${action.item.id}) as in not in basket`)
            }

            return {
                ...state,
                basket: newBasket
            };
            
        default:
            return state;
    }
    
};
export default reducer;
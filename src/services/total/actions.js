import { UPDATE_CART } from './actionTypes';

export const updateCart = cartProducts => dispatch => {
  let productQuantity = cartProducts.reduce((sum, p) => {
    sum += p.quantity;
    if (sum > 99) return 0;
    return sum;
  }, 0);

  let totalPrice = cartProducts.reduce((sum, p) => {
    sum += p.price * p.quantity + 5;
    return sum;
  }, 0);

  let installments = cartProducts.reduce((greater, p) => {
    greater = p.installments > greater ? p.installments : greater;
    return greater;
  }, 0);

  let cartTotal = {
    productQuantity,
    installments,
    totalPrice,
    currencyId: 'USD',
    currencyFormat: '$'
  };

  dispatch({
    type: UPDATE_CART,
    payload: cartTotal
  });
};

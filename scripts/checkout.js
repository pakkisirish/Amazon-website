import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentsummary.js';
import {renderCheckoutHeader} from './checkout/checkoutHeader.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart,loadCartFetch } from '../data/cart.js';
// import '../data/cart-class.js';
// import '../data/car.js';

async function loadPage() {
  await Promise.all([
  loadProductsFetch(),
  loadCartFetch()
  ])

  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();
}

loadPage();
/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
    resolve();
    });
  })
]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();
});
*/
/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve();
  });
}).then(() => {
  return new Promise((resolve) => {
    loadCart(() => {
    resolve();
    });
  });
}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();
});


loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();
});
*/



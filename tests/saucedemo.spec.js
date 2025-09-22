const { test, expect } = require('@playwright/test');
const LoginPage = require('./pages/LoginPage');
const InventoryPage = require('./pages/InventoryPage');
const CartPage = require('./pages/CartPage');
const CheckoutPage = require('./pages/CheckoutPage');
const testData = require('./data/testData');

test('Complete checkout flow', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Step 1: Open website and login
    await loginPage.navigate();
    await loginPage.login(testData.validUser.username, testData.validUser.password);

    // Step 2: Add product to cart
    await inventoryPage.addProductToCart(testData.productName);

    // Step 3: Open cart
    await inventoryPage.openCart();

    // Step 4: Proceed to checkout
    await cartPage.clickCheckout();

    // Step 5: Fill checkout information
    await checkoutPage.fillCheckoutForm(
        testData.checkoutInfo.firstName,
        testData.checkoutInfo.lastName,
        testData.checkoutInfo.zipCode
    );

    // Step 6: Continue and finish checkout
    await checkoutPage.clickContinue();
    await checkoutPage.clickFinish();

    // Step 7: Verify confirmation message
    const confirmationMessage = await checkoutPage.getConfirmationMessage();
    expect(confirmationMessage).toBe(testData.expectedConfirmation);
});
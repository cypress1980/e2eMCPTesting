class CartPage {
    constructor(page) {
        this.page = page;
        this.checkoutButton = '#checkout';
    }

    async clickCheckout() {
        await this.page.click(this.checkoutButton);
    }
}

module.exports = CartPage;
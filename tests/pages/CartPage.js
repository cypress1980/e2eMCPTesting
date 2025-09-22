class CartPage {
    constructor(page) {
        this.page = page;
        this.checkoutButton = '#checkout';
    }

    async clickCheckout() {
        try {
            await this.page.click(this.checkoutButton);
        } catch (error) {
            console.error('Failed to click checkout button:', error);
            throw error;
        }
    }
}

module.exports = CartPage;
class InventoryPage {
    constructor(page) {
        this.page = page;
        this.cartButton = '.shopping_cart_link';
    }

    async addProductToCart(productName) {
        const productSelector = `//div[text()='${productName}']/ancestor::div[@class='inventory_item']//button`;
        await this.page.locator(productSelector).click();
    }

    async openCart() {
        await this.page.click(this.cartButton);
    }
}

module.exports = InventoryPage;
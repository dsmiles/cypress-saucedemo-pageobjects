/*
    Constants for the product IDs and names

    On a production system, where the inventory list could number in the
    tens of thousands, I would implement this differently. Maybe, pulling
    the data from either an API or database.

    However, this is a demo website and the inventory list is quite small.
 */

export const PRODUCTS = {
    BIKE_LIGHT: 0,
    BOLT_TSHIRT: 1,
    ONESIE: 2,
    TATT_TSHIRT: 3,
    BACKPACK: 4,
    FLEECE_JACKET: 5,
};

export const PRODUCT_NAMES = {
    BIKE_LIGHT: "Sauce Labs Bike Light",
    BOLT_TSHIRT: "Sauce Labs Bolt T-Shirt",
    ONESIE: "Sauce Labs Onesie",
    TATT_TSHIRT: "Test.allTheThings() T-Shirt (Red)",
    BACKPACK: "Sauce Labs Backpack",
    FLEECE_JACKET: "Sauce Labs Fleece Jacket"
};

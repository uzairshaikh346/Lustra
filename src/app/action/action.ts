import { Product } from "../components/Productcard";

export const addToCart = (product: Product) => {
  const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

  const existingProductIndex = cart.findIndex((item) => item._id === product._id);

  if (existingProductIndex > -1) {
    // If product already exists, increase quantity
    cart[existingProductIndex].quantity = (cart[existingProductIndex].quantity || 1) + 1;
  } else {
    // Add new product with initial quantity
    cart.push({
      ...product,
      quantity: 1, // Initial quantity
    });
  }

  // Save updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeFromCart = (productId: string) => {
  let cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

  // Filter out the product with the given ID
  cart = cart.filter((item) => item._id !== productId);

  // Save updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const updateCartQuantity = (productId: string, quantity: number) => {
  const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

  const productIndex = cart.findIndex((item) => item._id === productId);

  if (productIndex > -1) {
    if (quantity > 0) {
      // Update the product's quantity
      cart[productIndex].quantity = quantity;
    } else {
      // Remove the product from the cart if quantity is 0 or less
      cart.splice(productIndex, 1);
    }
  } else if (quantity > 0) {
    // If product doesn't exist and quantity > 0, add it to the cart
    cart.push({
      _id: productId,
      name: "Unknown Product", // Placeholder, replace with actual data if available
      imageUrl: "", // Placeholder to avoid interface errors
      description: "",
      price: 0,
      stock: 0,
      quantity: quantity,
    });
  }

  // Save updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Get all cart items
export const getCartItems = (): Product[] => {
  return JSON.parse(localStorage.getItem("cart") || "[]");
};

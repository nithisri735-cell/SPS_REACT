import { useEffect } from "react";

function ProductCard({
  productName,
  price,
  quantity,
  selectedColor,
  deliveryCity,
}) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      `${productName} | ${selectedColor} | Cart: ${quantity}`;

    return () => {
      document.title = previousTitle;
    };
  }, [productName, selectedColor, quantity]);

  const totalAmount = quantity * price;

  return (
    <div className="product-card">
      <div className="product-image">
        🖱️
      </div>

      <div className="product-details">
        <h2>{productName}</h2>

        <p className="price">
          ₹{price} <span>per item</span>
        </p>

        <p className="color-display">
          Selected Colour:

          <span
            className="color-swatch"
            style={{
              backgroundColor: selectedColor.toLowerCase(),
            }}
          />

          <strong>{selectedColor}</strong>
        </p>

        <p>Deliver to: {deliveryCity}</p>

        <hr />

        <p>Cart Quantity: {quantity}</p>

        <h3>Total Amount: ₹{totalAmount}</h3>

        <p className="status">
          {quantity === 0
            ? "Cart is empty"
            : "Product added to cart"}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
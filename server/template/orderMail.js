const createOrderEmail = (order) => {
  const { address, comment, email, name, orders, phone, price } = order;

  const items = orders
    .map((item) => {
      return `
      <li>
        <h3>${item.name}</h3>
        <p>Price: ${item.price}</p>
        <p>Quantity: ${item.quantity}</p>
      </li>
    `;
    })
    .join("");

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Order Confirmation</title>
        <style>
          body {
            font-family: Arial, sans-serif;
          }
          h2 {
            color: #333;
          }
          ul {
            padding: 0;
          }
          li {
            margin-bottom: 10px;
          }
          .order-details {
            background-color: #f5f5f5;
            padding: 20px;
          }
          .order-summary {
            margin-top: 20px;
            padding: 10px;
            background-color: #ff0000;
            color: #ffffff;
            border-radius: 5px;
            text-decoration: none;
            display: inline-block;
          }
        </style>
      </head>
      <body>
        <h2>Order Confirmation</h2>
        <p>Thank you for your order, ${name}!</p>
        <div class="order-details">
          <p>Your order details:</p>
          <ul>
            ${items}
          </ul>
          <p>Total price: ${price}</p>
          <p>Delivery address: ${address}</p>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
          <p>Additional comment: ${comment}</p>
        </div>
      </body>
    </html>
  `;
};

module.exports = createOrderEmail;

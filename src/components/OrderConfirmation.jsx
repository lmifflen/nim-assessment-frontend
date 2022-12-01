import React, { useEffect } from "react";

function OrderConfirmation(confirmation) {
  // const [order, setOrder] = useState(null);
  const order = { confirmation };

  useEffect(() => {
    // console.log("this is order", order);
    // setOrder(props);
    // setOrder(name.name)
  }, [confirmation]);
  return (
    <div>
      Thank you for your order {order.confirmation.confirmation.name}!
      <br />
      Your order will be delivered to {order.confirmation.confirmation.address}!
      <br />
      Your order number is {order.confirmation.confirmation.id}!
      <br />
      Your order is:
      {order.confirmation.confirmation.items.map((item) => (
        <div>{item.quantity} -</div>
      ))}
      <br />
      {/* {order.confirmation.confirmation.items} */}
    </div>
  );
}

export default OrderConfirmation;

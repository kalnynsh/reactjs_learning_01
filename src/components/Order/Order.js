import React from 'react';
import './Order.css';

const Order = props => {
  const { name, price, createdAt } = props;
  return (
    <div className="order">
      <div className="order__upper">
        <p className="p__order">Name: {name}</p>
        <p className="p__order">
          Price:
          <span className="order__price">{price}</span>
        </p>
      </div>
      <div className="order__lower">
        <p className="p__order">Created at: {createdAt}</p>
      </div>
    </div>
  );
};

export default Order;

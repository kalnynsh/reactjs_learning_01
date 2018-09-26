import React, { Component } from 'react';
import Order from '../Order';
import './Market.css';
import { connect } from 'react-redux';
import { createOrder, moveOrderToFarm } from 'actions/marketActions';

const mapStateToProps = state => {
  return {
    orders: state.market.orders
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createOrder: object => {
      dispatch(createOrder(object));
    },
    moveOrderToFarm: object => {
      dispatch(moveOrderToFarm(object));
    }
  };
};

let id = 0;

const getId = () => {
  id += 1;
  return id;
};

export const vegetables = [
  'Cabbage',
  'Radish',
  'Cucumbers',
  'Carrot',
  'Pea',
  'Eggplants',
  'Pumpkin',
  'Garlic',
  'Onion',
  'Pepper',
  'Potato',
  'Beet'
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date().toLocaleDateString('ru')
  };
};

class Market extends Component {
  createOrderHandler = () => {
    const { createOrder } = this.props;
    const newOrder = getNewOrder();
    createOrder(newOrder);
  };

  sendOrderHandler = () => {
    const { orders, moveOrderToFarm } = this.props;
    const lastOrder = orders[orders.length - 1];
    moveOrderToFarm(lastOrder);
  };

  render() {
    const { orders } = this.props;
    return (
      <div className="market">
        <h2>New orders on market</h2>
        <button
          className="new-orders__create-button"
          onClick={this.createOrderHandler}
        >
          Create order
        </button>
        <button onClick={this.sendOrderHandler} disabled={!orders.length}>
          Send order to farm
        </button>
        <div className="order-list">
          {orders.map(item => {
            return (
              <Order
                name={item.name}
                price={item.price}
                createdAt={item.createdAt}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Market);

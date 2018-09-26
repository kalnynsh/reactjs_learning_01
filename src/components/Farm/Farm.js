import React, {Component} from 'react';
import {connect} from 'react-redux';
import {moveOrderToCustomer} from '../../actions/farmActions';
import Order from '../Order';
import './Farm.css';

const mapStateToProps = state => {
  return {
    orders: state.farm.orders
  };
};

const mapDispatchToProps = {
  moveOrderToCustomer
};

class Farm extends Component {
  sendOrderHandler = () => {
    const {orders, moveOrderToCustomer} = this.props;
    const lastOrder = orders[orders.length - 1];
    moveOrderToCustomer(lastOrder);
  };

  render() {
    const {orders} = this.props;

    return (
      <div className="farm">
        <h2>The Farm</h2>
        <button disabled={!orders.length} onClick={this.sendOrderHandler}>
          Send product to customer
        </button>
        <div>
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
)(Farm);

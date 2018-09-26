import React from 'react';
import { connect } from 'react-redux';
import {
    getBudgetProfit,
    getBudgetMarketExpense,
    getBudgetFarmExpense,
    getBudgetDeliveryExpense
  } from '../../reducers/budget';
import './Budget.css';

const mapStateToProps = state => ({
    profit: getBudgetProfit(state),
    marketExpense: getBudgetMarketExpense(state),
    farmExpense: getBudgetFarmExpense(state),
    deliveryExpense: getBudgetDeliveryExpense(state),
});

const Budget = (props) => {
    const { profit, marketExpense, farmExpense, deliveryExpense } = props;

    return (
        <div className="budget">
            <h2>Budget</h2>
            <p>
                Total sum of money:
                <span className="t-profit">{profit}</span>
            </p>
            <p>
                Spent on sellers:
                <span className="t-sellers">{-marketExpense}</span>
            </p>
            <p>
                Spent on farm:
                <span className="t-farm">{-marketExpense}</span>
            </p>
            <p>
                Spent on delivery:
                <span className="t-delivery">{-deliveryExpense}</span>
            </p>
            <p>
                Total: {' '}
                <span className="t-total">
                    {profit - marketExpense - farmExpense - deliveryExpense}
                </span>
            </p>
        </div>
    );
};

export default connect(mapStateToProps)(Budget);

import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from '../actions/marketTypes';
import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';

const initialState = {
    profit: 0,
    marketExpense: 0,
    farmExpense: 0,
    deliveryExpense: 0,
};

const budget = (state = initialState, action) => {
    const expenseMarket = 20;
    const expenseFarm = 100;
    const expenseDelivery = 20;

    switch (action.type) {
        case CREATE_ORDER:
            return {
                ...state,
                profit: state.profit + action.payload.price,
                marketExpense: state.marketExpense + expenseMarket,
            };

        case MOVE_ORDER_TO_FARM:
            return {
                ...state,
                farmExpense: state.farmExpense + expenseFarm,
            };

        case MOVE_ORDER_TO_CUSTOMER:
            return {
                ...state,
                deliveryExpense: state.deliveryExpense + expenseDelivery,
            };

        default:
            return state;
    }
};

export const getBudgetProfit = state => state.budget.profit;
export const getBudgetMarketExpense = state => state.budget.marketExpense;
export const getBudgetFarmExpense = state => state.budget.farmExpense;
export const getBudgetDeliveryExpense = state => state.budget.deliveryExpense;

export default budget;

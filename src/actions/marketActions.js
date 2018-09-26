import {
    CREATE_ORDER,
    MOVE_ORDER_TO_FARM,
    DELETE_ORDER_FROM_MARKET
} from './marketTypes';

const createOrder = payload => ({
    type: CREATE_ORDER,
    payload,
});

const moveOrderToFarm = payload => ({
    type: MOVE_ORDER_TO_FARM,
    payload,
});

export { createOrder, moveOrderToFarm };

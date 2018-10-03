import {
  CREATE_ORDER,
  MOVE_ORDER_TO_FARM,
} from '../../actions/marketTypes';
import market from '../market';

describe('reducer market', () => {
  it('action with type CREATE_ORDER add action.payload to orders', () => {
    const next = market(undefined, {
      type: CREATE_ORDER,
      payload: { id: 1 },
    });

    expect([{ id: 1 }]).toEqual(expect.arrayContaining(next.orders));
  });

  it('action with type MOVE_ORDER_TO_FARM remove from orders by action.payload.id', () => {
    const next = market(
      { orders: [{ id: 1 }] },
      { type: MOVE_ORDER_TO_FARM, payload: { id: 1 } },
    );

    expect(next.orders).toEqual([]);
  });
});

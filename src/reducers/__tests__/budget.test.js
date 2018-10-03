import budget from '../budget';
import { MOVE_ORDER_TO_CUSTOMER } from '../../actions/farmTypes';
import {
  CREATE_ORDER,
  MOVE_ORDER_TO_FARM,
} from '../../actions/marketTypes';

describe('reducer budget', () => {
  it('action with type MOVE_ORDER_TO_CUSTOMER increase deliveryExpanse on 20', () => {
    const next = budget(undefined, {
      type: MOVE_ORDER_TO_CUSTOMER,
    });
    expect(next.deliveryExpanse).toEqual(20);
  });

  it('action with type CREATE_ORDER increase profit on action.payload.price', () => {
    const next = budget(undefined, {
      type: CREATE_ORDER,
      payload: { price: 111 },
    });
    expect(next.profit).toEqual(111);
  });

  it('action with type MOVE_ORDER_TO_FARM increase farmExpanse on 100', () => {
    const next = budget(undefined, {
      type: MOVE_ORDER_TO_FARM,
    });
    expect(next.farmExpanse).toEqual(100);
  });
});

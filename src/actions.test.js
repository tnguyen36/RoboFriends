import * as actions from './actions';
import { CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_PENDING
} from './constants';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware])

it('should create an action to search robots', () => {
    const text = 'woo';
    const expectedAction = {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction)
})

it('handles requesting robots API', async () => {
    const store = mockStore();
    await store.dispatch(actions.requestRobots());
    const action = store.getActions();
    console.log(action);
    const expectedAction = {
        type: REQUEST_ROBOTS_PENDING,
    }
    expect(action[0]).toEqual(expectedAction)

})
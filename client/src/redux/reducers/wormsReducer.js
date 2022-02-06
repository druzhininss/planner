import { wormsAT } from '../actionTypes/wormsAT';

const initialState = { worms: [] };

export const wormsReducer = (state = initialState, action) => {
  switch (action.type) {
    case wormsAT.WORMS_INIT: {
      if (!state.worms.length) {
        const worms = action.payload;
        const mappedWorms = worms.map((worm, i) => {
          return {
            ...worm,
            id: i + 1
          }
        });
        return {
          ...state,
          worms: mappedWorms
        }
      } else {
        return {
          ...state
        }
      }
    }

    default:
      return state
  }
}

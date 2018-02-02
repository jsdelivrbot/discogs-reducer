import {
  FETCH_DATA
} from '../actions/types'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_DATA:
      return [...state, ...action.payload.data.releases ];
  }
  console.log(action.payload);
  return state;
}

import { reducerActions } from "./actions";
import { reducerActionInterface } from "../interfaces";

export const initialState = {
  request: {
    loading: false,
    payload: {},
  },
  response: {
    status: null,
    error: null,
    data: null,
  },
};

export const reducer = (
  state = initialState,
  action: reducerActionInterface
) => {
  switch (action.type) {
    case reducerActions.INPUT:
      return {
        ...state,
        request: {
          ...state.request,
          payload: {
            ...state.request.payload,
            [action.prop]: action.value,
          },
        },
      };

    default:
      return state;
  }
};

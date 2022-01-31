import { act } from "react-dom/test-utils";
import { WeatherState, WeatherAction, FETCH_WEATHER, SET_LOADING, SET_ERROR } from "../types";

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: ''
}

export default (state = initialState, action: WeatherAction): WeatherState => {
  console.log(action);
  switch(action.type) {
    case FETCH_WEATHER:
      return {
        data: action.payload,
        loading: false,
        error: ''
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case SET_ERROR: 
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default: 
      return state;
  }
}
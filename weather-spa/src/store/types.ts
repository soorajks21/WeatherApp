export const FETCH_WEATHER = 'FETCH_WEATHER';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_ALERT = 'SET_ALERT';


export interface WeatherData {
  weather: weatherType[];
}
  
export type weatherType = {

  temp?: string;
  min?: string;
  max?: string;
  time?: string;
  state?: string;
  abbr: string;
}

export interface WeatherError {
    cod: string;
    message: string;
  }
  
  export interface WeatherState {
    data: WeatherData | null;
    loading: boolean;
    error: string;
  }
  
  interface GetWeatherAction {
    type: typeof FETCH_WEATHER;
    payload: WeatherData;
  }
  
  interface SetLoadingAction {
    type: typeof SET_LOADING;
  }
  
  interface SetErrorAction {
    type: typeof SET_ERROR;
    payload: string;
  }
  
  export type WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction;
  
  export interface AlertAction {
    type: typeof SET_ALERT;
    payload: string;
  }
  
  export interface AlertState {
    message: string;
  }
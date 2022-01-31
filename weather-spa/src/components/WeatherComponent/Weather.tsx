import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { setError } from '../../store/actions/weatherAction';
import Alert from '../AlertComponents/Alert';
import { getWeather, setLoading } from '../../store/actions/weatherAction';
import { RootState } from '../../store';
import WeatherComponent from './WeatherComponent';
import Spinner from '../SpinnerComponent/Spinner';



const Weather: FC = () => {
            
    const weatherData = useSelector((state: RootState) => state.weather.data);
    const loading = useSelector((state: RootState) => state.weather.loading);
    const error = useSelector((state: RootState) => state.weather.error);
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(setLoading());
            dispatch(getWeather());
        
    }, [dispatch]);
    
    return (
        <>
            {loading ? <Spinner /> 
                :
                <div className='columns is-multiline is-1 is-mobile mt-3'>
                    {weatherData?.weather.map((item) => <WeatherComponent data={item} />)}
   
                    {error && <Alert message={error} onClose={() => dispatch(setError())} />}
                </div>
        }
  
        </>
       
    )
}


export default Weather;
import React from 'react';
import Location from './Location';
import Weather from './Weather';
import Loading from './Loading';
import Error from './Error';
import styles from './App.module.css';

/* TODO: Find out a suitable filing system */

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            background: '#2FB0E8',
            location: 'Galway',
            coords: {
                lat: '',
                lon: '',
            },
            timezone: 3600,
            weather: {
                main: {
                    temp: '-',
                    type: '-',
                    icon_code: '-',
                },
                current: {
                    clouds: 0,
                    feels_like: 0,
                    humidity: 0,
                    pressure: 0,
                    uvi: 0,
                    wind_deg: 0,
                    wind_speed: 0,
                    sunrise: '',
                    sunset: '',
                },
                daily: [],
                hourly: [],
            },
            isLoading: false,
            hasError: false,
            errorCode: 400,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    componentDidMount() {
        this.getWeather();
    }

    async getWeather() {
        const apiKey = '46cdd346f210fb124c900b5979411685';
        const units = 'metric';

        this.setState({ isLoading: true });
        await this.getCoords();

        // eslint-disable-next-line react/destructuring-assignment
        if (!this.state.hasError) {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.coords.lat}&lon=${this.state.coords.lon}&exclude=minutely&appid=${apiKey}&units=${units}`
            );

            const data = await response.json();

            if (response.ok) {
                this.setBackground(data.current.weather[0].icon);

                this.setState(() => {
                    return {
                        timezone: data.timezone_offset,
                        weather: {
                            main: {
                                temp: Math.floor(data.current.temp),
                                type: data.current.weather[0].main,
                                icon_code: data.current.weather[0].icon,
                            },
                            current: {
                                clouds: data.current.clouds,
                                feels_like: Math.floor(data.current.feels_like),
                                humidity: data.current.humidity,
                                pressure: data.current.pressure,
                                uvi: Math.floor(data.current.uvi),
                                wind_dir: this.degreesToText(
                                    data.current.wind_deg
                                ),
                                wind_speed: Math.floor(
                                    data.current.wind_speed * 3.6
                                ),
                                sunrise: data.current.sunrise,
                                sunset: data.current.sunset,
                            },
                            daily: data.daily.slice(1, 8),
                            hourly: data.hourly.slice(1, 25),
                        },
                        isLoading: false,
                        hasError: false,
                    };
                });
            } else {
                this.setState({
                    background: '#B72020',
                    isLoading: false,
                    hasError: true,
                    errorCode: response.status,
                });
            }
        }
    }

    async getCoords() {
        const apiKey = 'pk.1d549a3ebb241d6d4a4c19e14848a250';
        const { location } = this.state;

        const response = await fetch(
            `https://eu1.locationiq.com/v1/search.php?key=${apiKey}&format=json&q=${location}`
        );

        const data = await response.json();

        if (response.ok) {
            this.setState(() => {
                return {
                    coords: {
                        lat: data[0].lat,
                        lon: data[0].lon,
                    },
                    hasError: false,
                };
            });
        } else {
            this.setState({
                background: '#B72020',
                isLoading: false,
                hasError: true,
                errorCode: response.status,
            });
        }
    }

    setBackground(icon) {
        let background = '';

        switch (icon) {
            case '01d':
                background = '#2FB0E8';
                break;
            case '01n':
                background = 'black';
                break;
            case '02d':
                background = '#50c3f4';
                break;
            case '02n':
                background = '#373737';
                break;
            case '03d':
            case '03n':
            case '04d':
            case '04n':
                background = '#6193A9';
                break;
            case '13d':
            case '13n':
                background = '#83d2f5';
                break;
            case '50d':
            case '50n':
                background =
                    'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(131,131,144,1) 0%, rgba(194,209,212,1) 100%)';
                break;
            default:
                background = '#2fb0e8';
                break;
        }

        this.setState({ background });
    }

    handleChange(e) {
        this.setState({ location: e.target.value });
    }

    handleBlur() {
        this.getWeather();
    }

    /* TODO: Find out what this eslint errors means */

    degreesToText(degrees) {
        let val = degrees / 22.5 + 0.5;
        const dirs = [
            'N',
            'NNE',
            'NE',
            'ENE',
            'E',
            'ESE',
            'SE',
            'SSE',
            'S',
            'SSW',
            'SW',
            'SSW',
            'WSW',
            'W',
            'WNW',
            'NW',
            'NNW',
        ];
        val = Math.floor(val % 8);
        return dirs[val];
    }

    render() {
        const {
            background,
            location,
            timezone,
            weather,
            isLoading,
            hasError,
            errorCode,
        } = this.state;

        const display = hasError ? (
            <Error code={errorCode} />
        ) : (
            <Weather
                timezone={timezone}
                main={weather.main}
                current={weather.current}
                hourly={weather.hourly}
                daily={weather.daily}
            />
        );

        return (
            <div className={styles.app_container} style={{ background }}>
                <Location
                    location={location}
                    handleChange={this.handleChange}
                    handleBlur={this.handleBlur}
                />

                {isLoading ? <Loading /> : display}
            </div>
        );
    }
}

export default App;

import { useEffect, useState } from 'react';

import styled from 'styled-components';

const FooterLayout = ({className}) => {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState('');
  const [weather, setWeather] = useState('');

  useEffect(() => {
    // fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=17690994a1f234ca3d902d9c4f9eba44&lang=ru').then(rawJson => rawJson.json()).then(console.log)

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=450560317d1b9b8a6938e439443661f8&lang=ru&units=metric')
      .then(rawJson => rawJson.json())
      .then(({name, main, weather}) => {
        setCity(name);
        setTemperature(Math.round(main.temp));
        setWeather(weather[0].description);
      });
  }, []);

  return (
    <footer className={className}>
      <div>
        <div>Блог веб-разработчика</div>
        <div>
          <a href="mailto:web@developer.ru">web@developer.ru</a>
        </div>
      </div>
      <div>
        <div>{city},{' '}{new Date().toLocaleString('ru', {day: 'numeric', month: 'long'})}</div>
        <div>{temperature} градусов, {weather}</div>
      </div>
    </footer>
  )
};

export const Footer = styled(FooterLayout)`
  display: flex;
  align-items: center;
  font-weight: 600;
  justify-content: space-between;
  width: 1000px;
  height: 120px;
  padding: 20px 40px;
  box-shadow: 0 0 5px #000;
  background-color: white;
`;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherForCity(city: string): Observable<any> {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=6b0abb47333d67ca665d3b00072c65fd`;
    return this.http.get<any>(path).pipe(
      map((data) => {
        console.log(data);
        return {
          ...data,
          image: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        };
      }),
      delay(500)
    );
  }
}

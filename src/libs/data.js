import JSONdata from './DailyForecast_MX.json';
import alasql from 'alasql';

    let data = JSON.parse(JSON.stringify(JSONdata));
    const climas = data.map((element) => element.desciel).filter((value, index, self) => self.indexOf(value) === index);
    let monterreyClima = alasql("SELECT * FROM ? WHERE nmun == 'Monterrey'", [data]);
    let cuajimalpaClima = alasql("SELECT * FROM ? WHERE nmun == 'Cuajimalpa de Morelos'", [data]);
    let tolucaClima = alasql("SELECT * FROM ? WHERE nmun == 'Toluca'", [data]);
    let hvtslClima = alasql("SELECT * FROM ? WHERE nmun == 'Heroica Villa Tezoatlán de Segura y Luna'", [data]);

export const monterrey = monterreyClima; 
export const cuajimalpa = cuajimalpaClima;
export const toluca = tolucaClima;
export const hvts = hvtslClima;
export const clime = climas;
export default data;
import { LightningElement } from 'lwc';

export default class Day001_bandNameGenerator extends LightningElement {
    cityName;
    animalName;
    bandName;

    handleCityNameChange(event){
        this.cityName = event.target.value;
    }
    handleAnimalNameChange(event){
        this.animalName = event.target.value;
    }
    generateBandName(){
        this.bandName = `${this.cityName} ${this.animalName}`;
    }
}
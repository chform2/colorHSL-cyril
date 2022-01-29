/* MODIS */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hsl';

  // i init my range inputs
  public color: number = 125;
  public saturation: number = 50;
  public lightness: number = 50;

  // i init my color scares
  public primary: string = ``;
  public analogous: string = ``;
  public complementary: string = ``;

  public primaryHsl: string = ``;
  public analogousHsl: string = ``;
  public complementaryHsl: string = ``;

  // min and max values
  public minColor: number = 0;
  public maxColor: number = 360;

  public minSaturation: number = 0;
  public maxSaturation: number = 100;

  public minLightness: number = 0;
  public maxLightness: number = 100;

  /**
   * Return a valid angle if bigger than 360.
   * @param value 
   * @returns 
   */
  roundUp(value: number): number {
    return value % 360;
  }

  output():void{
    this.primaryHsl = `hsl(${this.roundUp(this.color)}, ${this.saturation}%, ${this.lightness}%)`;
    this.analogousHsl = `hsl(${this.roundUp(this.color+30)}, ${this.saturation}%, ${this.lightness}%)`;
    this.complementaryHsl = `hsl(${this.roundUp(this.color+180)}, ${this.saturation}%, ${this.lightness}%)`;
  }

  /**
   * Method for calc and apply colors to the scares and change output div content
   */
  calc(): void {
    this.primary = `background-color: hsl(${this.roundUp(this.color)}, ${this.saturation}%, ${this.lightness}%);`;
    this.analogous = `background-color: hsl(${this.roundUp(this.color+30)}, ${this.saturation}%, ${this.lightness}%);`;
    this.complementary = `background-color: hsl(${this.roundUp(this.color+180)}, ${this.saturation}%, ${this.lightness}%);`;
    this.output();
  }


  resetValue(target:any, value:number):number{
    target.value = value;
    return value;
  }
  /**
   * Function for call the function onEvent change 
   * @param event 
   */
  onKey(event: any):void {
    switch (event.target.className) {
      case 'color':
        this.color = (event.target.value<=this.minColor || event.target.value>=this.maxColor) ? this.resetValue(event.target, this.color) : event.target.value;
        this.calc();
        break;
      case 'saturation':
        this.color = (event.target.value<=this.minSaturation || event.target.value>=this.maxSaturation) ? this.resetValue(event.target, this.saturation) : event.target.value;
        this.calc();
        break;
      case 'lightness':
        this.color = (event.target.value<=this.minLightness || event.target.value>=this.maxLightness) ? this.resetValue(event.target, this.lightness) : event.target.value;
        this.calc();
        break;
      default:
        alert('error');
    }
  }

  ngOnInit() {
    this.calc();
  }


}
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
    this.primaryHsl = `hsl(${this.roundUp(this.color)}, ${this.saturation}%, ${this.lightness}%);`;
    this.analogousHsl = `hsl(${this.roundUp(this.color+30)}, ${this.saturation}%, ${this.lightness}%);`;
    this.complementaryHsl = `hsl(${this.roundUp(this.color+180)}, ${this.saturation}%, ${this.lightness}%);`;
  }

  /**
   * Method for calc and apply colors to the scares and change output div content
   */
  calc(): void {
    this.output();
    this.primary = `background-color: ${this.primaryHsl}`;
    this.analogous = `background-color: ${this.analogousHsl}`;
    this.complementary = `background-color: ${this.complementaryHsl}`;
  }


  invalidValue(obj:any, value:number):number{
    alert("Invalid value");
    obj.value = value;
    return value;
  }
  /**
   * Function for call the function onEvent change 
   * @param event 
   */
  onKey(event: any):void {
    let target = event.target;
    let value = target.value;
    switch (target.className) {
      case 'color':
        this.color = (value<this.minColor || value>=this.maxColor) ?  this.invalidValue(target, this.color) : value;
        this.calc();
        break;
      case 'saturation':
        this.saturation = (value<this.minSaturation || value>=this.maxSaturation) ? this.invalidValue(target, this.saturation) : value;
        this.calc();
        break;
      case 'lightness':
        this.lightness = (value<this.minLightness || value>=this.maxLightness) ? this.invalidValue(target, this.lightness) : value;
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
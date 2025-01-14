import { Modifier } from '../../interfaces/Modifier';
import { Venoms } from '../../interfaces/Venom';
import EffectArray from '../../interfaces/EffectArray';
class Venom implements Venoms{

    _id: string;
    description: string;
    image: string;
    type: string;
    name: string;
    value: number;
    modifiers: Modifier | undefined | null;
    duration: number | undefined;

    constructor(
       props: Venoms
    ) {
        this._id = props._id;
        this.description = props.description;
        this.image = props.image;
        this.type = props.type;
        this.name = props.name;
        this.value = props.value;
        this.modifiers = props.modifiers;
        this.duration = props.duration;
    }
    static calculateMod(effectArray: Array<EffectArray>) {

        let modifiers: Modifier = {
            hit_points: 0,
            intelligence: 0,
            dexterity: 0,
            insanity: 0,
            charisma: 0,
            constitution: 0,
            strength: 0,
        };

        if ( effectArray.every(element => element.attribute === effectArray[0].attribute)) {
            let attributeName = effectArray[0].attribute;
            let potencyArray = []
            effectArray.forEach(effect => {
                let potencyValue = 0;
                const { attribute } = effect;
                switch (effect.potency) {
                  case 'least':
                    potencyValue = 5;
                    potencyArray.push(potencyValue);
                    break;
                  case 'lesser':
                    potencyValue = 10;
                    potencyArray.push(potencyValue);
                    break;
                  case 'greater':
                    potencyValue = 20;
                    potencyArray.push(potencyValue);
                    break;
                  default: // no potency or unknown
                    potencyValue = 15;
                    potencyArray.push(potencyValue);
                    break;
                }
                let n = media(potencyArray); // take the 
                n = round(n); // round too newares 5

                if (modifiers.hasOwnProperty(attribute)) {
                    modifiers[attribute as keyof Modifier] = n;
                  }
              });

              if (attributeName === 'insanity') {
                modifiers[attributeName as keyof Modifier] = +modifiers[attributeName as keyof Modifier]; // take into account frenzy and calm and reverse the sign
              }
              console.log("MODIFIERS OF VENOM: " + modifiers);
              return modifiers;
        }
    }
    static calculateDuration(effectArray: Array<EffectArray>) {
      
      let duration: number = 0;

    if ( effectArray.every(element => element.attribute === effectArray[0].attribute)) {
        
        effectArray.forEach(effect => {
            switch (effect.potency) {
              case 'least':
                duration += 1;
                break;
              case 'lesser':
                duration += 1;
                break;
              case 'greater':
                duration += 3;
                break;
              default: // no potency or unknown
                duration += 2;
                break;
            }
          });

          console.log("DURATION OF VENOM: " + duration);
          return duration;
    }
    }
}
function round(value: number): number {
    return Math.floor(value / 5) * 5;
}
function media(potencyArray: number[]){

  let sum = potencyArray.reduce((previous, current) => current += previous);
  let media = sum / potencyArray.length;
 
  return media
}

export default Venom;

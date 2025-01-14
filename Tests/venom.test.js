import Venom from "../components/Potions/Venom.tsx"
import Potion from "../components/Potions/Potion.tsx"
import { categorizeEffect } from "../components/Potions/Potion.tsx"

describe('Cuando el numero de ingredientes es de 2-4', () => {
    describe('Cuando los effectos de ingredientes llevan la palabra "setback"', () => {
        describe('Cuando todos los ingredientes tienen el mismo atributo (DEX)"', () => {
            describe('Cuando todos los ingredientes son del tipo "least"', () => {
                it('el resultado sera la media redondeado al multiplo de 5 inferior', () => {
                    const ingredientsArray = ["least_setback_dexterity", "least_setback_dexterity"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    const result = Venom.calculateMod(convertedArray)

                    expect(result.dexterity).toBe(5);
                })
                it('la duracion sera la media de duraciones redondeado para abajo', () => {
                    const ingredientsArray = ["least_setback_dexterity", "least_setback_dexterity"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    const result = Venom.calculateDuration(convertedArray)
                    

                    expect(result).toBe(1);
                })
            })
            describe('Cuando todos los ingredientes son del tipo "lesser"', () => {
                it('el resultado sera la media redondeado al multiplo de 5 inferior', () => {
                    const ingredientsArray = ["lesser_setback_dexterity", "lesser_setback_dexterity", "lesser_setback_dexterity", "lesser_setback_dexterity"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    const result = Venom.calculateMod(convertedArray)

                    expect(result.dexterity).toBe(10);
                })
                it('la duracion sera la media de duraciones redondeado para abajo', () => {
                    const ingredientsArray = ["lesser_setback_dexterity", "lesser_setback_dexterity", "lesser_setback_dexterity", "lesser_setback_dexterity"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    const result = Venom.calculateDuration(convertedArray)
                    

                    expect(result).toBe(1);
                })
            })
            describe('Cuando todos los ingredientes son del tipo "normal"', () => {
                it('el resultado sera la media redondeado al multiplo de 5 inferior', () => {
                    const ingredientsArray = ["setback_dexterity", "setback_dexterity", "setback_dexterity"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    const result = Venom.calculateMod(convertedArray)

                    expect(result.dexterity).toBe(15);
                })
                it('la duracion sera la media de duraciones redondeado para abajo', () => {
                    const ingredientsArray = ["setback_dexterity", "setback_dexterity", "setback_dexterity"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    const result = Venom.calculateDuration(convertedArray)
                    

                    expect(result).toBe(2);
                })
            })
            describe('Cuando todos los ingredientes son del tipo "greater"', () => {
                it('el resultado sera la media redondeado al multiplo de 5 inferior', () => {
                    const ingredientsArray = ["greater_setback_dexterity", "greater_setback_dexterity"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    const result = Venom.calculateMod(convertedArray)

                    expect(result.dexterity).toBe(20);
                })
                it('la duracion sera la media de duraciones redondeado para abajo', () => {
                    const ingredientsArray = ["greater_setback_dexterity", "greater_setback_dexterity"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    const result = Venom.calculateDuration(convertedArray)
                    

                    expect(result).toBe(3);
                })
            })
            describe('Cuando todos los ingredientes son del tipo diferente', () => {
                it('el resultado sera la media redondeado al multiplo de 5 inferior', () => {
                    const ingredientsArray = ["least_setback_dexterity", "least_setback_dexterity", "setback_dexterity", "greater_setback_dexterity"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    const result = Venom.calculateMod(convertedArray)

                    expect(result.dexterity).toBe(10);
                })
                it('la duracion sera la media de duraciones redondeado para abajo', () => {
                    const ingredientsArray = ["least_setback_dexterity", "lesser_setback_dexterity", "setback_dexterity", "greater_setback_dexterity"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    const result = Venom.calculateDuration(convertedArray)
                    

                    expect(result).toBe(1);
                })
                it('El nombre de la poción será: Modifier + Attribute + Venom', () => {
                    const ingredientsArray = [{"_id":"6702b4f876863c206a48cd20","name":"Radiant Petal","description":"A petal that enhances charisma with its ethereal glow.","value":9,"effects":["least_setback_dexterity"],"image":"/images/ingredients/setback/setback_13.webp","type":"ingredient"},
                    {"_id":"6702b4f876863c206a48cd20","name":"Radiant Petal","description":"A petal that enhances charisma with its ethereal glow.","value":9,"effects":["lesser_setback_dexterity"],"image":"/images/ingredients/setback/setback_13.webp","type":"ingredient"},
                    {"_id":"6702b4f876863c206a48cd20","name":"Radiant Petal","description":"A petal that enhances charisma with its ethereal glow.","value":9,"effects":["setback_dexterity"],"image":"/images/ingredients/setback/setback_13.webp","type":"ingredient"},
                    {"_id":"6702b4f876863c206a48cd20","name":"Radiant Petal","description":"A petal that enhances charisma with its ethereal glow.","value":9,"effects":["greater_setback_dexterity"],"image":"/images/ingredients/setback/setback_13.webp","type":"ingredient"}]
                    
                    const result = Potion.create(ingredientsArray,0)
                    
                    expect(result.name).toBe("least dexterity Venom");
                    //parece que el preograma no hace lo que deveria a si que falla
                })
            })
        })
        describe('Cuando no todos los ingredientes tienen el mismo atributo (DEX, INT...)"', () => {
            it('el resultado sera la media redondeado al multiplo de 5 inferior', () => {
                const ingredientsArray = ["least_setback_dexterity", "least_setback_charisma", "setback_dexterity", "greater_setback_dexterity"]
                let convertedArray = []
                for (let i = 0; i < ingredientsArray.length; i++) {
                    convertedArray[i] = categorizeEffect(ingredientsArray[i])
                }
                const result = Venom.calculateMod(convertedArray)

                expect(result).toBe(undefined);
                //el resultado al ser undefined el creador luego lo combierte en la failed potion
            })
        })
    })
})

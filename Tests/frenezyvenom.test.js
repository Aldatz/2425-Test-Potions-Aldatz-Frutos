import Venom from "../components/Potions/Venom.tsx"
import Potion from "../components/Potions/Potion.tsx"
import { categorizeEffect } from "../components/Potions/Potion.tsx"

describe('Cuando el numero de ingredientes es de 2-4', () => {
    describe('Cuando los effectos de ingredientes llevan la palabra "setback"', () => {
        describe('Cuando todos los ingredientes tienen el mismo atributo (DEX)"', () => {
            describe('Cuando todos los ingredientes son del tipo "least"', () => {
                it('el resultado sera la media redondeado al multiplo de 5 inferior', () => {
                    const ingredientsArray = ["least_frenzy", "least_frenzy"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    const result = Venom.calculateMod(convertedArray)

                    expect(result.insanity).toBe(5);
                })
                it('la duracion sera la media de duraciones redondeado para abajo', () => {
                    const ingredientsArray = ["least_frenzy", "least_frenzy"]
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
                    const ingredientsArray = ["lesser_frenzy", "lesser_frenzy", "lesser_frenzy", "lesser_frenzy"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    const result = Venom.calculateMod(convertedArray)

                    expect(result.insanity).toBe(10);
                })
                it('la duracion sera la media de duraciones redondeado para abajo', () => {
                    const ingredientsArray = ["lesser_frenzy", "lesser_frenzy", "lesser_frenzy", "lesser_frenzy"]
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
                    const ingredientsArray = ["frenzy", "frenzy", "frenzy"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    const result = Venom.calculateMod(convertedArray)

                    expect(result.insanity).toBe(15);
                })
                it('la duracion sera la media de duraciones redondeado para abajo', () => {
                    const ingredientsArray = ["frenzy", "frenzy", "frenzy"]
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
                    const ingredientsArray = ["greater_frenzy", "greater_frenzy"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    const result = Venom.calculateMod(convertedArray)

                    expect(result.insanity).toBe(20);
                })
                it('la duracion sera la media de duraciones redondeado para abajo', () => {
                    const ingredientsArray = ["greater_frenzy", "greater_frenzy"]
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
                    const ingredientsArray = ["least_frenzy", "least_frenzy", "frenzy", "greater_frenzy"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    const result = Venom.calculateMod(convertedArray)

                    expect(result.insanity).toBe(10);
                })
                it('la duracion sera la media de duraciones redondeado para abajo', () => {
                    const ingredientsArray = ["least_frenzy", "lesser_frenzy", "frenzy", "greater_frenzy"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    const result = Venom.calculateDuration(convertedArray)
                    

                    expect(result).toBe(1);
                })
                it('El nombre de la poción será: Modifier + Attribute + venom', () => {
                    const ingredientsArray = [{"_id":"6702b4f876863c206a48cd20","name":"Radiant Petal","description":"A petal that enhances charisma with its ethereal glow.","value":9,"effects":["least_frenzy"],"image":"/images/ingredients/setback/setback_13.webp","type":"ingredient"},
                    {"_id":"6702b4f876863c206a48cd20","name":"Radiant Petal","description":"A petal that enhances charisma with its ethereal glow.","value":9,"effects":["lesser_frenzy"],"image":"/images/ingredients/setback/setback_13.webp","type":"ingredient"},
                    {"_id":"6702b4f876863c206a48cd20","name":"Radiant Petal","description":"A petal that enhances charisma with its ethereal glow.","value":9,"effects":["frenzy"],"image":"/images/ingredients/setback/setback_13.webp","type":"ingredient"},
                    {"_id":"6702b4f876863c206a48cd20","name":"Radiant Petal","description":"A petal that enhances charisma with its ethereal glow.","value":9,"effects":["greater_frenzy"],"image":"/images/ingredients/setback/setback_13.webp","type":"ingredient"}]
                    
                    const result = Potion.create(ingredientsArray,0)
                    
                    expect(result.name).toBe("least frenzy venom");
                    //parece que el preograma no hace lo que deveria a si que falla
                })
            })
        })
        describe('Cuando no todos los ingredientes tienen el mismo atributo (DEX, INT...)"', () => {
            it('el resultado sera la media redondeado al multiplo de 5 inferior', () => {
                const ingredientsArray = ["least_frenzy", "least_setback_charisma", "frenzy", "greater_frenzy"]
                let convertedArray = []
                for (let i = 0; i < ingredientsArray.length; i++) {
                    convertedArray[i] = categorizeEffect(ingredientsArray[i])
                }
                const result = Venom.calculateMod(convertedArray)

                expect(result).toBe(undefined);
                //el resultado al ser undefined el creador luego lo combierte en la failed potion
            })
        })
        describe('Cuando alguno de los ingredientes no tienen ni frenzy ni setback en el nombre', () => {
            it('no se creara correctamente el venom', () => {
                const ingredientsArray = [{"_id":"6702b4f876863c206a48cd20","name":"Radiant Petal","description":"A petal that enhances charisma with its ethereal glow.","value":9,"effects":["least_frenzy"],"image":"/images/ingredients/setback/setback_13.webp","type":"ingredient"},
                {"_id":"6702b46b76863c206a48ccfb","name":"Sickly Sap","description":"A viscous sap that slows movement and reduces dexterity.","value":175,"effects":["greater_damage_dexterity"],"image":"/images/ingredients/damage/damage_9.webp","type":"ingredient"},
                    {"_id":"6702b4f876863c206a48cd20","name":"Radiant Petal","description":"A petal that enhances charisma with its ethereal glow.","value":9,"effects":["frenzy"],"image":"/images/ingredients/setback/setback_13.webp","type":"ingredient"},
                    {"_id":"6702b4f876863c206a48cd20","name":"Radiant Petal","description":"A petal that enhances charisma with its ethereal glow.","value":9,"effects":["greater_frenzy"],"image":"/images/ingredients/setback/setback_13.webp","type":"ingredient"}]
                    
                    const result = Potion.create(ingredientsArray,0)
                    
                    expect(result.name).toBe("Failed Potion");
            })
        })
        describe('Cuando la cantidad de ingredientes es menor que 2 y mayor que 4', () => {
            it('no se creara el venom si es 1', () => {
                const ingredientsArray = [{"_id":"6702b4f876863c206a48cd20","name":"Radiant Petal","description":"A petal that enhances charisma with its ethereal glow.","value":9,"effects":["least_frenzy"],"image":"/images/ingredients/setback/setback_13.webp","type":"ingredient"},]
                    
                    const result = Potion.create(ingredientsArray,0)
                    
                    expect(result.name).toBe("");
                    //si lo crea no funciona el codigo
            })
            it('no se creara el venom si son 5', () => {
                const ingredientsArray = [{"_id":"6702b4f876863c206a48cd20","name":"Radiant Petal","description":"A petal that enhances charisma with its ethereal glow.","value":9,"effects":["least_frenzy"],"image":"/images/ingredients/setback/setback_13.webp","type":"ingredient"},
                {"_id":"6702b4f876863c206a48cd20","name":"Radiant Petal","description":"A petal that enhances charisma with its ethereal glow.","value":9,"effects":["least_frenzy"],"image":"/images/ingredients/setback/setback_13.webp","type":"ingredient"},
                {"_id":"6702b46b76863c206a48ccfb","name":"Sickly Sap","description":"A viscous sap that slows movement and reduces dexterity.","value":175,"effects":["least_frenzy"],"image":"/images/ingredients/damage/damage_9.webp","type":"ingredient"},
                    {"_id":"6702b4f876863c206a48cd20","name":"Radiant Petal","description":"A petal that enhances charisma with its ethereal glow.","value":9,"effects":["frenzy"],"image":"/images/ingredients/setback/setback_13.webp","type":"ingredient"},
                    {"_id":"6702b4f876863c206a48cd20","name":"Radiant Petal","description":"A petal that enhances charisma with its ethereal glow.","value":9,"effects":["greater_frenzy"],"image":"/images/ingredients/setback/setback_13.webp","type":"ingredient"}]
                    
                    const result = Potion.create(ingredientsArray,0)
                    
                    expect(result.name).toBe("");
                    //si lo crea no funciona el codigo
            })
        })  
    })
})
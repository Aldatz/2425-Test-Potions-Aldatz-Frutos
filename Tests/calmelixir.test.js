import Elixir from "../components/Potions/Elixir.tsx"
import Potion from "../components/Potions/Potion.tsx"
import { categorizeEffect } from "../components/Potions/Potion.tsx"

describe('Cuando el numero de ingredientes es de 2-4', () => {
    describe('Cuando los effectos de ingredientes llevan la palabra "Boost"', () => {
        describe('Cuando todos los ingredientes tienen el mismo atributo (DEX)"', () => {
            describe('Cuando todos los ingredientes son del tipo "least"', () => {
                it('el resultado sera la media redondeado al multiplo de 5 inferior', () => {
                    const ingredientsArray = ["least_calm", "least_calm"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    const result = Elixir.calculateMod(convertedArray)

                    expect(result.insanity).toBe(-5);
                })
                it('la duracion sera la media de duraciones redondeado para abajo', () => {
                    const ingredientsArray = ["least_calm", "least_calm"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    const result = Elixir.calculateDuration(convertedArray)
                    

                    expect(result).toBe(1);
                })
            })
            describe('Cuando todos los ingredientes son del tipo "lesser"', () => {
                it('el resultado sera la media redondeado al multiplo de 5 inferior', () => {
                    const ingredientsArray = ["lesser_calm", "lesser_calm", "lesser_calm", "lesser_calm"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    const result = Elixir.calculateMod(convertedArray)

                    expect(result.insanity).toBe(-10);
                })
                it('la duracion sera la media de duraciones redondeado para abajo', () => {
                    const ingredientsArray = ["lesser_calm", "lesser_calm", "lesser_calm", "lesser_calm"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    const result = Elixir.calculateDuration(convertedArray)
                    

                    expect(result).toBe(1);
                })
            })
            describe('Cuando todos los ingredientes son del tipo "normal"', () => {
                it('el resultado sera la media redondeado al multiplo de 5 inferior', () => {
                    const ingredientsArray = ["calm", "calm", "calm"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    const result = Elixir.calculateMod(convertedArray)

                    expect(result.insanity).toBe(-15);
                })
                it('la duracion sera la media de duraciones redondeado para abajo', () => {
                    const ingredientsArray = ["calm", "calm", "calm"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    const result = Elixir.calculateDuration(convertedArray)
                    

                    expect(result).toBe(2);
                })
            })
            describe('Cuando todos los ingredientes son del tipo "greater"', () => {
                it('el resultado sera la media redondeado al multiplo de 5 inferior', () => {
                    const ingredientsArray = ["greater_calm", "greater_calm"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    const result = Elixir.calculateMod(convertedArray)

                    expect(result.insanity).toBe(-20);
                })
                it('la duracion sera la media de duraciones redondeado para abajo', () => {
                    const ingredientsArray = ["greater_calm", "greater_calm"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    const result = Elixir.calculateDuration(convertedArray)
                    

                    expect(result).toBe(3);
                })
            })
            describe('Cuando todos los ingredientes son del tipo diferente', () => {
                it('el resultado sera la media redondeado al multiplo de 5 inferior', () => {
                    const ingredientsArray = ["least_calm", "least_calm", "calm", "greater_calm"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    const result = Elixir.calculateMod(convertedArray)

                    expect(result.insanity).toBe(-10);
                })
                it('la duracion sera la media de duraciones redondeado para abajo', () => {
                    const ingredientsArray = ["least_calm", "lesser_calm", "calm", "greater_calm"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    const result = Elixir.calculateDuration(convertedArray)
                    

                    expect(result).toBe(1);
                })
                it('El nombre de la poción será: Modifier + Attribute + Elixir', () => {
                    const ingredientsArray = [{"_id":"6702b4f876863c206a48cd20","name":"Radiant Petal","description":"A petal that enhances charisma with its ethereal glow.","value":9,"effects":["least_calm"],"image":"/images/ingredients/boost/boost_13.webp","type":"ingredient"},
                    {"_id":"6702b4f876863c206a48cd20","name":"Radiant Petal","description":"A petal that enhances charisma with its ethereal glow.","value":9,"effects":["lesser_calm"],"image":"/images/ingredients/boost/boost_13.webp","type":"ingredient"},
                    {"_id":"6702b4f876863c206a48cd20","name":"Radiant Petal","description":"A petal that enhances charisma with its ethereal glow.","value":9,"effects":["calm"],"image":"/images/ingredients/boost/boost_13.webp","type":"ingredient"},
                    {"_id":"6702b4f876863c206a48cd20","name":"Radiant Petal","description":"A petal that enhances charisma with its ethereal glow.","value":9,"effects":["greater_calm"],"image":"/images/ingredients/boost/boost_13.webp","type":"ingredient"}]
                    
                    const result = Potion.create(ingredientsArray,0)
                    
                    expect(result.name).toBe("least calm elixir");
                    //parece que el preograma no hace lo que deveria a si que falla
                })
            })
        })
        describe('Cuando no todos los ingredientes tienen el mismo atributo (DEX, INT...)"', () => {
            it('el resultado sera la media redondeado al multiplo de 5 inferior', () => {
                const ingredientsArray = ["least_calm", "least_boost_charisma", "calm", "greater_calm"]
                let convertedArray = []
                for (let i = 0; i < ingredientsArray.length; i++) {
                    convertedArray[i] = categorizeEffect(ingredientsArray[i])
                }
                const result = Elixir.calculateMod(convertedArray)

                expect(result).toBe(undefined);
                //el resultado al ser undefined el creador luego lo combierte en la failed potion
            })
        })
        describe('Cuando alguno de los ingredientes no tienen ni calm ni boost en el nombre', () => {
            it('no se creara correctamente el elixir', () => {
                const ingredientsArray = [{"_id":"6702b4f876863c206a48cd20","name":"Radiant Petal","description":"A petal that enhances charisma with its ethereal glow.","value":9,"effects":["least_calm"],"image":"/images/ingredients/boost/boost_13.webp","type":"ingredient"},
                {"_id":"6702b46b76863c206a48ccfb","name":"Sickly Sap","description":"A viscous sap that slows movement and reduces dexterity.","value":175,"effects":["greater_damage_dexterity"],"image":"/images/ingredients/damage/damage_9.webp","type":"ingredient"},
                    {"_id":"6702b4f876863c206a48cd20","name":"Radiant Petal","description":"A petal that enhances charisma with its ethereal glow.","value":9,"effects":["calm"],"image":"/images/ingredients/boost/boost_13.webp","type":"ingredient"},
                    {"_id":"6702b4f876863c206a48cd20","name":"Radiant Petal","description":"A petal that enhances charisma with its ethereal glow.","value":9,"effects":["greater_calm"],"image":"/images/ingredients/boost/boost_13.webp","type":"ingredient"}]
                    
                    const result = Potion.create(ingredientsArray,0)
                    
                    expect(result.name).toBe("Failed Potion");
            })
        })
        describe('Cuando la cantidad de ingredientes es menor que 2 y mayor que 4', () => {
            it('no se creara el elixir si es 1', () => {
                const ingredientsArray = [{"_id":"6702b4f876863c206a48cd20","name":"Radiant Petal","description":"A petal that enhances charisma with its ethereal glow.","value":9,"effects":["least_calm"],"image":"/images/ingredients/boost/boost_13.webp","type":"ingredient"},]
                    
                    const result = Potion.create(ingredientsArray,0)
                    
                    expect(result.name).toBe("");
                    //si lo crea no funciona el codigo
            })
            it('no se creara el elixir si son 5', () => {
                const ingredientsArray = [{"_id":"6702b4f876863c206a48cd20","name":"Radiant Petal","description":"A petal that enhances charisma with its ethereal glow.","value":9,"effects":["least_calm"],"image":"/images/ingredients/boost/boost_13.webp","type":"ingredient"},
                {"_id":"6702b4f876863c206a48cd20","name":"Radiant Petal","description":"A petal that enhances charisma with its ethereal glow.","value":9,"effects":["least_calm"],"image":"/images/ingredients/boost/boost_13.webp","type":"ingredient"},
                {"_id":"6702b46b76863c206a48ccfb","name":"Sickly Sap","description":"A viscous sap that slows movement and reduces dexterity.","value":175,"effects":["least_calm"],"image":"/images/ingredients/damage/damage_9.webp","type":"ingredient"},
                    {"_id":"6702b4f876863c206a48cd20","name":"Radiant Petal","description":"A petal that enhances charisma with its ethereal glow.","value":9,"effects":["calm"],"image":"/images/ingredients/boost/boost_13.webp","type":"ingredient"},
                    {"_id":"6702b4f876863c206a48cd20","name":"Radiant Petal","description":"A petal that enhances charisma with its ethereal glow.","value":9,"effects":["greater_calm"],"image":"/images/ingredients/boost/boost_13.webp","type":"ingredient"}]
                    
                    const result = Potion.create(ingredientsArray,0)
                    
                    expect(result.name).toBe("");
                    //si lo crea no funciona el codigo
            })
        })  
    })
})
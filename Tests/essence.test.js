import Essence from "../components/Potions/Essence.tsx"
import Potion from "../components/Potions/Potion.tsx"
import { categorizeEffect } from "../components/Potions/Potion.tsx"
describe('Cuando el numero de ingredientes es de 2-4', () => {
    describe('Cuando los effectos de ingredientes llevan la palabra "Increse"', () => {
        describe('Cuando todos los ingredientes tienen el mismo atributo (HP)"', () => {
            describe('Cuando todos los ingredientes son del tipo "least"', () => {
                it('el resultado sera la media redondeado al multiplo de 5 inferior', () => {
                    const ingredientsArray = ["least_increase_hit_points", "least_increase_hit_points"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    console.log(convertedArray);
                    
                    const result = Essence.calculateMod(convertedArray)

                    expect(result).toBe(12);
                })
                it('el resultado sera la media redondeado al multiplo de 5 inferior', () => {
                    const ingredientsArray = ["least_increase_hit_points", "least_increase_hit_points", "least_increase_hit_points"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    console.log(convertedArray);
                    
                    const result = Essence.calculateMod(convertedArray)

                    expect(result).toBe(21);
                })
                it('el resultado sera la media redondeado al multiplo de 5 inferior', () => {
                    const ingredientsArray = ["least_increase_hit_points", "least_increase_hit_points", "least_increase_hit_points", "least_increase_hit_points"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    console.log(convertedArray);
                    
                    const result = Essence.calculateMod(convertedArray)

                    expect(result).toBe(36);
                }) 
            })
            describe('Cuando todos los ingredientes son del tipo "lesser"', () => {
                it('el resultado sera la media redondeado al multiplo de 5 inferior', () => {
                    const ingredientsArray = ["lesser_increase_hit_points", "lesser_increase_hit_points"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    console.log(convertedArray);
                    
                    const result = Essence.calculateMod(convertedArray)

                    expect(result).toBe(24);
                })
                it('el resultado sera la media redondeado al multiplo de 5 inferior', () => {
                    const ingredientsArray = ["lesser_increase_hit_points", "lesser_increase_hit_points", "lesser_increase_hit_points"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    console.log(convertedArray);
                    
                    const result = Essence.calculateMod(convertedArray)

                    expect(result).toBe(42);
                })
                it('el resultado sera la media redondeado al multiplo de 5 inferior', () => {
                    const ingredientsArray = ["lesser_increase_hit_points", "lesser_increase_hit_points", "lesser_increase_hit_points", "lesser_increase_hit_points"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    console.log(convertedArray);
                    
                    const result = Essence.calculateMod(convertedArray)

                    expect(result).toBe(72);
                }) 
            })
            describe('Cuando todos los ingredientes son del tipo "normal"', () => {
                it('el resultado sera la media redondeado al multiplo de 5 inferior', () => {
                    const ingredientsArray = ["increase_hit_points", "increase_hit_points"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    console.log(convertedArray);
                    
                    const result = Essence.calculateMod(convertedArray)

                    expect(result).toBe(36);
                })
                it('el resultado sera la media redondeado al multiplo de 5 inferior', () => {
                    const ingredientsArray = ["increase_hit_points", "increase_hit_points", "increase_hit_points"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    console.log(convertedArray);
                    
                    const result = Essence.calculateMod(convertedArray)

                    expect(result).toBe(63);
                })
                it('el resultado sera la media redondeado al multiplo de 5 inferior', () => {
                    const ingredientsArray = ["increase_hit_points", "increase_hit_points", "increase_hit_points", "increase_hit_points"]
                    let convertedArray = []
                    for (let i = 0; i < ingredientsArray.length; i++) {
                        convertedArray[i] = categorizeEffect(ingredientsArray[i])
                    }
                    console.log(convertedArray);
                    
                    const result = Essence.calculateMod(convertedArray)

                    expect(result).toBe(96);
                }) 
            })
        })
    })
})
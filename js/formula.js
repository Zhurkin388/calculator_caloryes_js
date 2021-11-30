const CaloriesFormulaFactor = {
    WEIGTH: 10,
    HEIGHT: 6.25,
    AGE: 5,
};

const formulaCalories = (weigth, height, age, sex) => {
    const formulaWeigth = CaloriesFormulaFactor.WEIGTH * weigth;
    const formulaHeight = CaloriesFormulaFactor.HEIGHT * height;
    const formulaAge = CaloriesFormulaFactor.AGE * age;
    
    return (formulaWeigth) + (formulaHeight) - (formulaAge) + sex;
};

export { formulaCalories };
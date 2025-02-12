function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    if (weight && height) {
        const bmi = weight / (height * height);
        let category = '';
        let suggestion = '';
        
        // Calculate ideal weight range for normal BMI (18.5 - 24.9)
        const minIdealWeight = (18.5 * height * height).toFixed(1);
        const maxIdealWeight = (24.9 * height * height).toFixed(1);
        
        if (bmi < 18.5) {
            category = 'Underweight';
            suggestion = `To reach a normal weight, you should gain weight to be between ${minIdealWeight}kg and ${maxIdealWeight}kg`;
        }
        else if (bmi < 25) {
            category = 'Normal weight';
        }
        else if (bmi < 30) {
            category = 'Overweight';
            suggestion = `To reach a normal weight, you should lose weight to be between ${minIdealWeight}kg and ${maxIdealWeight}kg`;
        }
        else {
            category = 'Obese';
            suggestion = `To reach a normal weight, you should lose weight to be between ${minIdealWeight}kg and ${maxIdealWeight}kg`;
        }

        document.getElementById('result').innerHTML = 
            `Your BMI is: ${bmi.toFixed(1)}<br>
             Category: ${category}
             ${suggestion ? '<br><br>' + suggestion : ''}`;
    } else {
        document.getElementById('result').innerHTML = 
            'Please enter valid weight and height';
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

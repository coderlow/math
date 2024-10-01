function gcd(a, b) {
    while (b) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function calculateGCD() {
    const input = document.getElementById('gcdNumbers').value;
    const numbers = input.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));

    if (numbers.length > 0) {
        const result = numbers.reduce((acc, curr) => gcd(acc, curr));
        document.getElementById('gcdResult').innerText = `НОД: ${result}`;
    } else {
        document.getElementById('gcdResult').innerText = 'Введите хотя бы одно число';
    }
}

function calculateLCM() {
    const input = document.getElementById('lcmNumbers').value;
    const numbers = input.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));

    if (numbers.length > 0) {
        const result = numbers.reduce((acc, curr) => lcm(acc, curr));
        document.getElementById('lcmResult').innerText = `НОК: ${result}`;
    } else {
        document.getElementById('lcmResult').innerText = 'Введите хотя бы одно число';
    }
}

function calculatePercentage() {
    const percentValue = parseInt(document.getElementById('percentValue').value);
    const total = parseInt(document.getElementById('percentTotal').value);

    if (!isNaN(percentValue) && !isNaN(total) && total !== 0) {
        const result = (percentValue / 100) * total; // Находим процент от числа
        document.getElementById('percentResult').innerText = `${percentValue}% от ${total} = ${result}`;
    } else {
        document.getElementById('percentResult').innerText = 'Введите оба числа и убедитесь, что общее число не равно нулю';
    }
}

function calculateAverage() {
    const input = document.getElementById('averageNumbers').value;
    const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

    if (numbers.length > 0) {
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        const average = sum / numbers.length;
        document.getElementById('averageResult').innerText = `Среднее: ${average}`;
    } else {
        document.getElementById('averageResult').innerText = 'Введите хотя бы одно число';
    }
}

function calculatePower() {
    const base = parseFloat(document.getElementById('base').value);
    const exponent = parseInt(document.getElementById('exponent').value);

    if (!isNaN(base) && !isNaN(exponent)) {
        const result = Math.pow(base, exponent);
        document.getElementById('powerResult').innerText = `Результат: ${result}`;
    } else {
        document.getElementById('powerResult').innerText = 'Введите корректные значения';
    }
}

function calculateAge() {
    const birthDate = new Date(document.getElementById('birthDate').value);
    const today = new Date();
    
    if (!isNaN(birthDate)) {
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        const ageResult = monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate()) ? age - 1 : age;
        document.getElementById('ageResult').innerText = `Ваш возраст: ${ageResult} лет`;
    } else {
        document.getElementById('ageResult').innerText = 'Введите корректную дату';
    }
}

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (!isNaN(weight) && !isNaN(height) && height > 0) {
        const bmi = weight / (height * height);
        document.getElementById('bmiResult').innerText = `Ваш ИМТ: ${bmi.toFixed(2)}`;
    } else {
        document.getElementById('bmiResult').innerText = 'Введите корректные значения';
    }
}

function convertUnits() {
    const value = parseFloat(document.getElementById('valueToConvert').value);
    const unitFrom = document.getElementById('unitFrom').value;
    const unitTo = document.getElementById('unitTo').value;

    if (!isNaN(value)) {
        // Конвертация единиц (пример для метров и километров)
        let result;

        if (unitFrom === 'meters' && unitTo === 'kilometers') {
            result = value / 1000;
        } else if (unitFrom === 'kilometers' && unitTo === 'meters') {
            result = value * 1000;
        } else if (unitFrom === 'grams' && unitTo === 'kilograms') {
            result = value / 1000;
        } else if (unitFrom === 'kilograms' && unitTo === 'grams') {
            result = value * 1000;
        } else if (unitFrom === 'pounds' && unitTo === 'kilograms') {
            result = value * 0.453592;
        } else if (unitFrom === 'kilograms' && unitTo === 'pounds') {
            result = value / 0.453592;
        } else {
            result = value; // Если единицы совпадают, просто возвращаем значение
        }

        document.getElementById('conversionResult').innerText = `Результат: ${result}`;
    } else {
        document.getElementById('conversionResult').innerText = 'Введите корректное значение';
    }
}

function calculateDaysBetween() {
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);

    if (!isNaN(startDate) && !isNaN(endDate)) {
        const difference = Math.abs(endDate - startDate);
        const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
        document.getElementById('dateResult').innerText = `Количество дней: ${days}`;
    } else {
        document.getElementById('dateResult').innerText = 'Введите корректные даты';
    }
}

function calculateFactorial() {
    const number = parseInt(document.getElementById('factorialNumber').value);

    if (!isNaN(number) && number >= 0) {
        let result = 1;
        for (let i = 1; i <= number; i++) {
            result *= i;
        }
        document.getElementById('factorialResult').innerText = `Факториал ${number}: ${result}`;
    } else {
        document.getElementById('factorialResult').innerText = 'Введите неотрицательное целое число';
    }
}

function generateRandomPassword() {
    const length = parseInt(document.getElementById('passwordLength').value) || 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    document.getElementById('randomPasswordResult').innerText = `Случайный пароль: ${password}`;
}

function calculateCalories() {
    const age = parseInt(document.getElementById('calorieAge').value);
    const weight = parseFloat(document.getElementById('calorieWeight').value);
    const height = parseFloat(document.getElementById('calorieHeight').value);
    const activityLevel = parseFloat(document.getElementById('activityLevel').value);
    
    if (!isNaN(age) && !isNaN(weight) && !isNaN(height) && activityLevel) {
        // Формула для расчета базального метаболизма (Mifflin-St Jeor)
        const bmr = 10 * weight + 6.25 * height - 5 * age + 5; // Для мужчин
        const caloriesNeeded = bmr * activityLevel; // Общие калории
        document.getElementById('calorieResult').innerText = `Калории, необходимые в день: ${caloriesNeeded.toFixed(2)}`;
    } else {
        document.getElementById('calorieResult').innerText = 'Введите корректные значения';
    }
}

function calculateAreaAndVolume() {
    const shape = document.getElementById('shape').value;
    let area, volume;

    if (shape === 'square') {
        const side = parseFloat(document.getElementById('squareSide').value);
        area = side * side;
        document.getElementById('areaResult').innerText = `Площадь квадрата: ${area}`;
        volume = null;
    } else if (shape === 'circle') {
        const radius = parseFloat(document.getElementById('circleRadius').value);
        area = Math.PI * radius * radius;
        document.getElementById('areaResult').innerText = `Площадь круга: ${area}`;
        volume = null;
    } else if (shape === 'cube') {
        const side = parseFloat(document.getElementById('cubeSide').value);
        area = 6 * side * side;
        volume = side * side * side;
        document.getElementById('areaResult').innerText = `Площадь куба: ${area}`;
        document.getElementById('volumeResult').innerText = `Объем куба: ${volume}`;
    } else if (shape === 'sphere') {
        const radius = parseFloat(document.getElementById('sphereRadius').value);
        area = 4 * Math.PI * radius * radius;
        volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        document.getElementById('areaResult').innerText = `Площадь сферы: ${area}`;
        document.getElementById('volumeResult').innerText = `Объем сферы: ${volume}`;
    } else {
        document.getElementById('areaResult').innerText = '';
        document.getElementById('volumeResult').innerText = '';
    }
}


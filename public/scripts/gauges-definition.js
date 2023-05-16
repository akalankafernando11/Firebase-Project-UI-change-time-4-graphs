// Create Temperature Gauge
function createTemperatureGauge() {
    var gauge = new LinearGauge({
        renderTo: 'gauge-temperature',
        width: 100,
        height: 200,
       // units: 'Temperature C',
        units: 'Temperature °F',
        minValue: 32,
        startAngle: 90,
        ticksAngle: 180,
        maxValue: 140,
        colorValueBoxRect: '#049faa',
        colorValueBoxRectEnd: '#049faa',
        colorValueBoxBackground: '#f1fbfc',
        valueDec: 2,
        valueInt: 2,
       // majorTicks: ['0', '5', '10', '15', '20', '25', '30', '35', '40'],
        majorTicks: ['32', '50', '68', '86', '104', '122', '140'],// '35', '40'],
        minorTicks: 4,
        strokeTicks: true,
        highlights: [
            {
                from: 86,
                to: 140,
                color: 'rgba(200, 50, 50, .75)',
            },
        ],
        colorPlate: '#fff',
        colorBarProgress: '#CC2936',
        colorBarProgressEnd: '#049faa',
        borderShadowWidth: 0,
        borders: false,
        needleType: 'arrow',
        needleWidth: 2,
        needleCircleSize: 7,
        needleCircleOuter: true,
        needleCircleInner: false,
        animationDuration: 1500,
        animationRule: 'linear',
        barWidth: 10,
    });
    return gauge;
}

// Create Humidity Gauge
function createHumidityGauge() {
    var gauge = new RadialGauge({
        renderTo: 'gauge-humidity',
        width: 200,
        height: 200,
        units: 'Humidity (%)',
        minValue: 0,
        maxValue: 100,
        colorValueBoxRect: '#049faa',
        colorValueBoxRectEnd: '#049faa',
        colorValueBoxBackground: '#f1fbfc',
        valueInt: 2,
        majorTicks: ['0', '20', '40', '60', '80', '100'],
        minorTicks: 4,
        strokeTicks: true,
        highlights: [
            {
                from: 80,
                to: 100,
                color: '#03C0C1',
            },
        ],
        colorPlate: '#fff',
        borderShadowWidth: 0,
        borders: false,
        needleType: 'line',
        colorNeedle: '#007F80',
        colorNeedleEnd: '#007F80',
        needleWidth: 2,
        needleCircleSize: 3,
        colorNeedleCircleOuter: '#007F80',
        needleCircleOuter: true,
        needleCircleInner: false,
        animationDuration: 1500,
        animationRule: 'linear',
    });
    return gauge;
}

function convertUnits() {
  var input = document.getElementById('inputValue').value
  var fromUnit = document.getElementById('fromUnit').value
  var toUnit = document.getElementById('toUnit').value
  var result

  if (fromUnit === toUnit) {
    result = input
  } else if (fromUnit === 'inches') {
    if (toUnit === 'centimeters') {
      result = input * 2.54
    } else if (toUnit === 'meters') {
      result = input * 0.0254
    } else if (toUnit === 'feet') {
      result = input / 12
    }
  } else if (fromUnit === 'centimeters') {
    if (toUnit === 'inches') {
      result = input / 2.54
    } else if (toUnit === 'meters') {
      result = input * 0.01
    } else if (toUnit === 'feet') {
      result = input / 30.48
    }
  } else if (fromUnit === 'meters') {
    if (toUnit === 'inches') {
      result = input / 0.0254
    } else if (toUnit === 'centimeters') {
      result = input * 100
    } else if (toUnit === 'feet') {
      result = input * 3.28084
    }
  } else if (fromUnit === 'feet') {
    if (toUnit === 'inches') {
      result = input * 12
    } else if (toUnit === 'centimeters') {
      result = input * 30.48
    } else if (toUnit === 'meters') {
      result = input * 0.3048
    }
  }

  document.getElementById('result').innerHTML = result
}

convertUnits()

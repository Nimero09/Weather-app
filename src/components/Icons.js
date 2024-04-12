const Icons = (icon) => {
  switch (icon) {
    case 'Thunderstorm':
      icon = 'icons/thunderstorm.svg'
      break;
    case 'Drizzle':
      icon = 'icons/drizzle.svg'
      break;
     case 'Rain':
      icon = 'icons/rain.svg'
      break;
    case 'Snow':
      icon = 'icons/snow.svg'
      break;
    case 'Clear':
      icon = 'icons/clear.svg'
      break;
    case 'Atmosphere':
      icon = 'icons/atmosphere.svg'
      break;
    case 'Clouds':
      icon = 'icons/clouds.svg'
      break;
    case 'Fog':
      icon = 'icons/fog.svg'
      break;
    case 'Haze':
      icon = 'icons/haze.svg'
      break;
    case 'Smoke':
      icon = 'icons/smoke.svg'
      break;
    default:
      icon = 'icons/clear.svg'
      break;
  }
  return icon;
}

export default Icons;
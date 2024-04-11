const Icons = (icon) => {
  switch (icon) {
    case 'Thundestorm':
      icon = '../assets/icons/thundestorm.svg'
      break;
    case 'Drizzle':
      icon = '../assets/icons/drizzle.svg'
      break;
     case 'Rain':
      icon = '../assets/icons/rain.svg'
      break;
    case 'Snow':
      icon = '../assets/icons/snow.svg'
      break;
    case 'Clear':
      icon = '../assets/icons/clear.svg'
      break;
    case 'Atmosphere':
      icon = '../assets/icons/atmosphere.svg'
      break;
    case 'Clouds':
      icon = '../assets/icons/clouds.svg'
      break;
    case 'Fog':
      icon = '../assets/icons/fog.svg'
      break;
    case 'Haze':
      icon = '../assets/icons/haze.svg'
      break;
    case 'Smoke':
      icon = '../assets/icons/smoke.svg'
      break;
    default:
      icon = '../assets/icons/clear.svg'
      break;
  }
  return icon;
}

export default Icons;
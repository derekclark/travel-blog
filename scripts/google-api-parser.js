function getCountry(results){
  if (results.address_components[5].types.includes("country")){
    return results.address_components[5].long_name
  }else{
    return results.address_components[6].long_name
  }

}

function getCity(results){
  // if country=England then city is [2] postal_town
  // else use [4] administrative_area_level_1

  if (getCountry(results) === "England"){
    return results.address_components[2].long_name
  } else{
    return results.address_components[3].long_name
  }
}

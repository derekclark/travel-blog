function getLat(lat, latRef)
{
  latRef = latRef || "N";
  return (lat[0] + lat[1]/60 + lat[2]/3600) * (latRef == "N" ? 1 : -1);
}

function getLon(lon, lonRef)
{
  lonRef = lonRef || "W";
  return (lon[0] + lon[1]/60 + lon[2]/3600) * (lonRef == "W" ? -1 : 1);
}

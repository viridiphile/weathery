export const ICON_MAP = new Map();

addMapping(["0n", "0d","01n", "01d"], "sun")
addMapping(["02n", "02d"], "cloud-sun")
addMapping(["04d", "03d", "04n", "03n"], "cloud")
addMapping(["50d", "50n"], "smog")
addMapping(["09d", "09n", "10d", "10n"], "cloud-showers-heavy")
addMapping(["13d", "13n"], "snowflake")
addMapping(["11d", "11n"], "cloud-bolt")


function addMapping(values, icon) {
    values.forEach(value => {
        ICON_MAP.set(value, icon)
    });
}

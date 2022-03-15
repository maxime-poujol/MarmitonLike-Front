/**
 *
 * @param text
 * @returns {string|string}
 */
export const upperFirst = (text) => {
    return text ? text.charAt(0).toUpperCase() + text.substring(1) : "";
}

/**
 *
 * @param time
 * @returns {string}
 */
export const parseTime = (time) => {
    const hours = Math.floor( time / 60);
    if (hours === 0) {
        return time + " min"
    }
    const min = time - hours * 60;
    if (min === 0) {
        return hours + " h";
    }
    return hours + " h " + min + " min";

    // je garde cette ligne pour rire
    //return ~~(time / 60) === 0 ? time + " min" : time - ~~(time / 60) * 60 === 0 ? ~~(time / 60) + " h" : ~~(time / 60) + " h " + (time - ~~(time / 60) * 60) +" min"
}
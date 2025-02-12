export const arrayAreaNames = (areas) => {
    
    console.log("areas from helper",areas.map(area => area.name));
    return areas.map(area => area.name);
}

export const contScientistsByArea = (scientists, area) => {
    return scientists.filter(scientist => scientist.area === area).length;
}


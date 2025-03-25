import axiosInstance from '../api/servicesAPI';


/*
* Fetch areas
* @returns {Array} - Array of areas name
*/

export const arrayAreaNames = (areas) => areas.map(area => area.name)

/*
* Fetch length scientists by area
* @param {String} area - Area ID
* @returns {Number} - Number of scientists by area
*/
export const contScientistsByArea = async(area) => {
    try {
        const response = await axiosInstance.get(`scientists/area/${area}`); // Service URL
        return response.data.length;
    } catch (error) {
        console.error('Error fetching data:',  error.response || error);
        return 0;
    }
}

/*
* Fetch scientists by area
* @param {Array} areas - Array of areas
* @returns {Array} - Array of scientists number by area
*/
export const arrayScientistsByArea = async(areas) => {
    const idAreas = areas.map(area => area.id)
    try {
        const results = await Promise.all(idAreas.map(id => contScientistsByArea(id)));
        return results; 
    } catch (error) {
        console.error('Error fetching scientists by areas:', error);
        return []; 
    }
}

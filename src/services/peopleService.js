import httpService from './httpService'

export const peopleService = {
    add,
    query,
    remove,
    getById,
}


const CAT_ENTITY = 'peoples'

async function query(criteria) {
    console.log("🚀 ~ file: peopleQueryService.js:16 ~ query ~ criteria", criteria)
    const peoples = await httpService.get(CAT_ENTITY, criteria)
    return peoples || []
}

function getById(peopleId) {
    return httpService.get(`${CAT_ENTITY}/${peopleId}`)
}

function remove(peopleId) {
    return httpService.delete(`${CAT_ENTITY}/${peopleId}`)
}
function add(people) {
    return httpService.post(CAT_ENTITY, people)
}




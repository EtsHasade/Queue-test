import { storageService } from './storegService'
import { utilService } from './utilService'


export const peopleService = {
    add,
    query,
    remove,
    getById,
}


const PEOPLE_ENTITY = 'peoples'
_createDb()


async function query(criteria) {
    const peoples = await storageService.get(PEOPLE_ENTITY, criteria)
    return peoples || []
}

function getById(peopleId) {
    return storageService.get(`${PEOPLE_ENTITY}/${peopleId}`, 'email')
}

function remove(peopleEmail) {
    return storageService.remove(`${PEOPLE_ENTITY}/${peopleEmail}`, 'email')
}
function add(people) {
    return storageService.post(PEOPLE_ENTITY, people)
}

async function _createDb() {
    const peoples = utilService.loadFromStorage(PEOPLE_ENTITY) || null
    if (!peoples) {
        const db = await import('../../data/db.json')
        const defaultPeoples = db.peoples
        storageService.setCollectionEntities(PEOPLE_ENTITY, defaultPeoples)
    }

}


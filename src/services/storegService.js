
export const storageService = {
    get,
    post,
    put,
    remove,
    setCollectionEntities,
    removeAll
}

function _query(entityType, delay = 500) {
    return new Promise((resolve) => {
        var entities = JSON.parse(localStorage.getItem(entityType) || '')
        setTimeout(() => {
            resolve(entities)
        }, delay)
    });
}

function removeAll(entityType) {
    _save(entityType, [])
    return Promise.resolve();
}


async function get(entityUrl, key = 'id') {
    const [entityKey, entityId] = entityUrl.split('/')
    const entities = await _query(entityKey);
    if (entityId) {
        return entities.find(entity => entity[key] === entityId);
    }
    return entities
}

async function post(entityType, newEntity) {
    newEntity.id = _makeId();
    newEntity.createdAt = Date.now().toLocaleString()
    const entities = await _query(entityType);
    entities.push(newEntity);
    _save(entityType, entities);
    return newEntity;
}


function setCollectionEntities(entityType, newEntities, delay = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            _save(entityType, newEntities)
            resolve(newEntities)
        }, delay)
    });
}

async function put(entityType, updatedEntity) {
    const entities = await _query(entityType);
    const idx = entities.findIndex(entity => entity.id === updatedEntity.id);
    entities.splice(idx, 1, updatedEntity);
    _save(entityType, entities);
    return updatedEntity;
}

async function remove(entityUrl, key = 'id') {
    const [entityKey, entityIdKey] = entityUrl.split('/')
    const entities = await _query(entityKey);
    const idx = entities.findIndex(entity => entity[key] === entityIdKey);
    entities.splice(idx, 1);
    _save(entityKey, entities);
}

function _save(entityType, entities = []) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
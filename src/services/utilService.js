
function saveToStorage(key, data) {
    try {
        const dataStr = JSON.stringify(data)
        localStorage.setItem(key, dataStr)
    } catch (error) {
        console.log('util service - cannot save to storage');
        throw error
    }
}

function loadFromStorage(key) {
    const dataStr = localStorage.getItem(key)
    return JSON.parse(dataStr || null)
}



export const utilService = {
    saveToStorage,
    loadFromStorage
}
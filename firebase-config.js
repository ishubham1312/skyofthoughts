// Local storage implementation
const LOCAL_STORAGE_KEY = 'sky_of_thoughts_stars';

// Helper functions to mimic Firebase functionality
function getLocalStorage() {
    const stars = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
    return stars;
}

function setLocalStorage(stars) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(stars));
}

// Mimicking Firebase's collection and document functionality
export function collection() {
    return {
        type: 'collection',
        name: 'stars'
    };
}

export function addDoc(collection, data) {
    const stars = getLocalStorage();
    const newStar = {
        id: Date.now().toString(),
        ...data
    };
    stars.push(newStar);
    setLocalStorage(stars);
    return Promise.resolve({ id: newStar.id });
}

export function getDocs(query) {
    const stars = getLocalStorage();
    return Promise.resolve({
        forEach: (callback) => {
            stars.forEach(star => {
                callback({
                    id: star.id,
                    data: () => star
                });
            });
        }
    });
}

export function query(collection, orderBy) {
    return collection;
}

export function orderBy() {
    return {};
}

export function doc(collection, id) {
    return {
        type: 'doc',
        id
    };
}

export function getDoc(docRef) {
    const stars = getLocalStorage();
    const star = stars.find(s => s.id === docRef.id);
    return Promise.resolve({
        exists: () => !!star,
        data: () => star
    });
}

// Export dummy Firebase app initialization
export const db = {};
export const app = {};
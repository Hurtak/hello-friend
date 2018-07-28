// TODO: revisit API?
const localStorageKeyPrefix = "STORAGE-";

function getPrefixedKey(key, componentId) {
  return localStorageKeyPrefix + (componentId ? componentId + "-" : "") + key;
}

export function initLocalStorage(keysToSave, componentId, state) {
  const newState = { ...state };

  for (const [key, value] of Object.entries(newState)) {
    if (!keysToSave.includes(key)) continue;

    const keyLocalStorage = getPrefixedKey(key, componentId);

    const savedItem = window.localStorage[keyLocalStorage];
    if (typeof savedItem === "string") {
      newState[key] = JSON.parse(savedItem);
    } else {
      window.localStorage[keyLocalStorage] = JSON.stringify(value);
    }
  }

  return newState;
}

export function saveToLocalStorage(keysToSave, componentId, state) {
  for (const [key, value] of Object.entries(state)) {
    if (!keysToSave.includes(key)) continue;

    const keyLocalStorage = getPrefixedKey(key, componentId);
    window.localStorage[keyLocalStorage] = JSON.stringify(value);
  }
}

export function clearLocalStorage() {
  const keysToDelete = Object.keys(window.localStorage).filter(key =>
    key.startsWith(localStorageKeyPrefix)
  );

  for (const key of keysToDelete) {
    delete window.localStorage[key];
  }
}

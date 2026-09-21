// The product was renamed to Sentenco. Saved settings used to be stored under keys that start with the old
// name. On start, copy each of them to the new "sentenco" name (once) so nobody loses their saved settings.
// (The old prefix is written in two pieces on purpose so a search-and-replace of the old name does not break this.)
const OLD_PREFIX = "senti" + "vo";
const NEW_PREFIX = "sentenco";

function migrate(store) {
  try {
    const old = [];
    for (let i = 0; i < store.length; i++) {
      const k = store.key(i);
      if (k && k.startsWith(OLD_PREFIX)) old.push(k);
    }
    old.forEach((k) => {
      const nk = NEW_PREFIX + k.slice(OLD_PREFIX.length);
      if (store.getItem(nk) === null) store.setItem(nk, store.getItem(k));
      store.removeItem(k);
    });
  } catch (e) { /* storage not available */ }
}

migrate(window.localStorage);
migrate(window.sessionStorage);

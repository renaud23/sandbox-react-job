export const JSON_LOADED = "__JSON_LOADED__";

export const jsonLoaded = (owner, json) => ({ type: JSON_LOADED, owner, json });

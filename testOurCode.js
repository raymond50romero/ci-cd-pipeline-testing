//choresListAPI.js

/**
 * Reads 'ChoresListData' data from local storage
 * and returns a JSON with all the chores information
 * found. If nothing in local storage returns JSON with
 * initialized fields
 * @returns {Object} A JSON object of ChoresListData
 */
 export function readChores() {
    if (localStorage.getItem("ChoresListData") === null) {
      let chores = {
        chores: [],
        archived: [],
        openChoresCount: 0,
        closedChoresCount: 0,
        choresCountId: 1,
      };
      localStorage.setItem("ChoresListData", JSON.stringify(chores));
      return JSON.parse(localStorage.getItem("ChoresListData"));
    } else {
      return JSON.parse(localStorage.getItem("ChoresListData"));
    }
  }
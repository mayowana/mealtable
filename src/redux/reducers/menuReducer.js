const INITIAL_STATE = {
  mobilemenu: false,
};

const menuReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case "TOGGLE_MENU":
      return {
        ...state,
        mobilemenu: true,
      };

    default:
        return {...state}
  }
};

export default menuReducer;
const INITIAL_STATE = {
  displayName: null,
  email: null,
  photoURL: null,
  uid: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CHANGE_USER_STATE":
      return {
        displayName: payload.displayName,
        email: payload.email,
        photoURL: payload.photoURL,
        uid: payload.uid
      };

    default:
      return state;
  }
};

export default userReducer;

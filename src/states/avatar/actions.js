import axios from 'axios';

/***************************************
  MAIN
----------------------------------------
  - types    : list of action types
  - make     : fun to make (create) an action obj
  - makers   : obj of action maker (creator) funs
  - specials : obj of specialized dispatchers
***************************************/

export const types = {
  GET_AVATAR_START   : 'GET_AVATAR_START',
  GET_AVATAR_SUCCESS : 'GET_AVATAR_SUCCESS',
  GET_AVATAR_FAILURE : 'GET_AVATAR_FAILURE',
};

const make = (type, data) => ({ type, data });

export const makers = Object.fromEntries (
  Object.keys (types).map ((name) => [
    name, (...args) => make (name, ...args)
  ])
);

export const specials = {}

/* getAvatar */ {
  // kept picking APIs that didn't actually require axios...
  const api = 'https://api.icndb.com/jokes/random?exclude=[explicit]';

  const thunker = (...args) => () => (dispatch) => {
    dispatch ({ type: types.GET_AVATAR_START });
    axios
      .get (api)
      .then ((response) => {
        dispatch ({ type: types.GET_AVATAR_SUCCESS, payload: response.data.value });
      })
      .catch ((error) => {
        dispatch ({ type: types.GET_AVATAR_FAILURE, payload: error.response });
      });
  };

  specials.getAvatar = { api, thunker };
}

/**************************************/

export default {
  types,
  makers,
};

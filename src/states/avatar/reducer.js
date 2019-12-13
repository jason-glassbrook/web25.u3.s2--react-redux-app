/// tools ///
import hi from 'tools/hi';
// import iffy from 'tools/iffy';
// import immutably from 'tools/immutably';
// import nullably from 'tools/nullably';

/// internal modules ///
import initState from './init'
import { types } from './actions';

/***************************************
  MAIN
----------------------------------------
  - reducer : state reducer
***************************************/

const reducer = (state = initState, action) => {
  ///>>> add any helper funs <<<///

  /// do it! ///
  try {
    /// actions ///
    switch (action.type) {
      case types.GET_AVATAR_START:
        hi.flag ('log', 'getting avatar : start...');
        return {
          ...state,
          isGetting : true,
        };
      case types.GET_AVATAR_SUCCESS:
        hi.flag ('log', 'getting avatar : success! ');
        return {
          ...state,
          text : action.payload,
          isGetting : false,
          error : '',
        };
      case types.GET_AVATAR_FAILURE:
        hi.flag ('log', 'getting avatar : failure! ');
        return {
          ...state,
          isGetting : false,
          error : action.payload,
        };
      // else
      default :
        hi.flag ('warn', 'action not defined');
        console.log (action);
        return (state);
    };
  }
  catch (error) {
    hi.flag ('error', 'something bad happened');
    console.error (error);
  }
};

/**************************************/

export default reducer;

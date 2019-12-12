/*******************************************************************************
  get
--------------------------------------------------------------------------------
  A wrapper for `axios.get`.
  It has less customizability than `axios`, but handles most basic cases.
*******************************************************************************/

/// internal modules ///
import request from './request';

/***************************************
  MAIN
***************************************/
const get = (url, options) => {
  request ('get', url, options)
};

/**************************************/

export default get;

/*******************************************************************************
  _options
--------------------------------------------------------------------------------
  An internal module to describe and handle `klaxios`'s options.
*******************************************************************************/

/// tools ///
import { is } from 'tools/iffy';

/// internal modules ///
import handleAxiosResponse from './handleAxiosResponse';
import handleAxiosError from './handleAxiosError';

/*--------------------------------------
  initOptions
--------------------------------------*/
export const initOptions = {
  config : undefined,
  handleResponse : (...args) => {
    handleAxiosResponse (...args);
  },
  handleError : (...args) => {
    handleAxiosError (...args);
  },
  handleData : (...args) => {
    console.log (...args);
  },
  initData : {},
};

/*--------------------------------------
  parseOptions
--------------------------------------*/
export const parseOptions = (options) => {
  if (is (options)) {
    options = { ...initOptions, ...options };
  } else {
    options = initOptions;
  }

  return (options);
};

/**************************************/

export default {
  init : initOptions,
  parse : parseOptions,
};

/*******************************************************************************
  handleAxiosError
--------------------------------------------------------------------------------
  A default method to handle `axios`'s error responses.

  params :
    response
    handleData
    fallbackData
*******************************************************************************/

/// tools ///
import $tree from 'tools/$tree';
import { flag as _flag } from 'tools/hi';
import { is } from 'tools/iffy';

/// internal modules ///
import $trunk from './$';
import parseError from './parseAxiosError';

/*//////////////////////////////////////
  meta
//////////////////////////////////////*/
const $this = $tree.branch ('handleAxiosError', $trunk);
const flag = (method, message) => {
  _flag (method, `${$this.$fullname} : ${message}`);
};

/***************************************
  MAIN
***************************************/
const handleAxiosError = (error, handleData, fallbackData) => {
  let data = fallbackData;

  try {
    const message = parseError(error);
    flag ('log', 'Here\'s what happened.');
    console.log (message);
  }
  catch (error) {
    flag ('error', 'An error occured.');
    console.error (error);
  }

  if (is (handleData)) {
    handleData (data);
  }
};

/**************************************/

export default handleAxiosError;

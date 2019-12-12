/*******************************************************************************
  handleAxiosResponse
--------------------------------------------------------------------------------
  A default method to handle `axios`'s data responses.

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
import parseResponse from './parseAxiosResponse';

/*//////////////////////////////////////
  meta
//////////////////////////////////////*/
const $this = $tree.branch ('handleAxiosResponse', $trunk);
const flag = (method, message) => {
  _flag (method, `${$this.$fullname} : ${message}`);
};

/***************************************
  MAIN
***************************************/
const handleAxiosResponse = (response, handleData, fallbackData) => {
  let data = fallbackData;

  try {
    data = parseResponse (response);
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

export default handleAxiosResponse;

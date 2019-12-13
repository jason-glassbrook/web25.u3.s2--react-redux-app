/// external modules ///
import React from 'react';
import * as ReactRedux from 'react-redux';

/// components ///
import Loader from 'react-loader-spinner';

/// states ///
import { actions } from 'states/avatar'

/***************************************
  REDUX
***************************************/

const mapStateToProps = (state) => ({
  text      : state.text,
  isGetting : state.isGetting,
  error     : state.error,
});

const mapDispatchToProps = {};

const connectAvatar = ReactRedux.connect (
  mapStateToProps, mapDispatchToProps,
);

/***************************************
  COMPONENT
***************************************/

const Avatar = (props) => {
  return (
    <div className='Avatar'>Avatar</div>
  );
};

/**************************************/

export default connectAvatar (Avatar);

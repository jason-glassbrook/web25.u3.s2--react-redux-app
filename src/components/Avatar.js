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

const mapDispatchToProps = {
  getAvatar : actions.specials.getAvatar.thunk
};

const connectAvatar = ReactRedux.connect (
  mapStateToProps, mapDispatchToProps,
);

/***************************************
  COMPONENT
***************************************/

const Avatar = (props) => {
  return (
    <div className='Avatar'>
      <h1>Chuck Norris Jokes of Awesomeness 💪</h1>
      {!props.text && !props.isGetting && <p>Go ahead! Fetch a joke 😂</p>}
      {props.isGetting && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
      {props.text && <p>{props.text.joke}</p>}
      <button onClick={props.getAvatar}>Get Chucked!</button>
    </div>
  );
};

/**************************************/

export default connectAvatar (Avatar);

import _ from 'lodash'
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch (action.type) {
    case "CREATE_STREAM":
      //key interpolation       // find the stream id and assign action.payload
      return { ...state, [action.payload.id]: action.payload };
    case "FETCH_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "FETCH_STREAMS":
      return { ...state, [action.payload.id]: action.payload };
    case "DELETE_STREAM":
      return _.omit(state, action.payload)
    case "EDIT_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

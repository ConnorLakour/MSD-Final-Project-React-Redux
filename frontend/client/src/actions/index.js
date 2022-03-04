import streams from "../apis/streams";
import history from '../history'

export const signIn = userId => {
  return {
    type: "SIGN_IN",
    payload: userId
  };
};
export const signOut = () => {
  return {
    type: "SIGN_OUT"
  };
};

export const createStream = formValues =>
  //^using thunk, so return an arrow fcn
  //^append userId to object
  async (disptach, getState) => {
    const {userId} = getState().autho
    const response = await streams.post("/stream/create", {...formValues, userId});

    disptach({ type: "CREATE_STREAM", payload: response.data });


    //programmatic naviagation
    //would be best to redirect here instead of EditStream and CreateStream
    //but <Router> gives me a blank page refresh
    history.push(`/stream/show/${userId}`);
    

  };

export const fetchStream = id => async disptach => {
  const response = await streams.get(`/stream/display/${id}`);

  disptach({ type: "FETCH_STREAM", payload: response.data[0] });
};

export const fetchStreams = () => async disptach => {
  const response = await streams.get("/stream/show");

  disptach({ type: "FETCH_STREAMS", payload: response.data });
};

export const deleteStream = id => async disptach => {
  await streams.delete(`/stream/delete/${id}`);

  disptach({ type: "DELETE_STREAM", payload: id });
};

export const editStream = (id, formValues) => async (disptach, getState) => {
  const {userId} = getState().autho
  const response = await streams.put(`/stream/edit/${id}`, formValues);
  console.log(response.data);
  disptach({ type: "EDIT_STREAM", payload: response.data });

  history.push(`/stream/show/${userId}`);

};

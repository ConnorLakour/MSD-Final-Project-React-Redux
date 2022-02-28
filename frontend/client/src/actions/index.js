import streams from "../apis/streams";

export const signIn = userId => {
  return {
    type: "SIGN_IN",
    payload: Number(userId)
  };
};
export const signOut = () => {
  return {
    type: "SIGN_OUT"
  };
};

export const createStream = formValues =>
  //^using thunk, so return an arrow fcn
  async disptach => {
    const response = await streams.post("/stream/create", formValues);

    disptach({ type: "CREATE_STREAM", payload: response.data });
  };

export const fetchStream = id => async disptach => {
  const response = await streams.get(`/stream/display/${id}`);

  disptach({ type: "FETCH_STREAM", payload: response.data });
};

export const fetchStreams = () => async disptach => {
  const response = await streams.get("/stream/show");

  disptach({ type: "FETCH_STREAMS", payload: response.data });
};

export const deleteStream = id => async disptach => {
  await streams.delete(`/stream/delete/${id}`);

  disptach({ type: "DELETE_STREAM", payload: id });
};

export const editStream = (id, formValues) => async disptach => {
  const response = await streams.put(`/stream/edit/${id}`, formValues);

  disptach({ type: "EDIT_STREAM", payload: response.data });
};

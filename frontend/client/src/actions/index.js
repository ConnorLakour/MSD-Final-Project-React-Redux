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
  //^using thunk so return an arrow fcn
  async disptach => {

   const response = await streams.post("/stream/create", formValues);


    disptach({type: "CREATE_STREAM", payload:response.data })

  }
  

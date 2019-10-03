import { FETCH_CONTENTS, ADD_STATUS_PAGE_URL } from "./types";
import axios from "axios";

const apiUrl = 'localhost:9000/statuspageurl';

export const addStatusPageUrl = ({ url }) => {
    return (dispatch) => {
      return axios.post(`${apiUrl}/add`, {url})
        .then(response => {
          dispatch(addStatusPageUrlSuccess(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
};
  
  export const addStatusPageUrlSuccess =  (data) => {
    return {
      type: ADD_STATUS_PAGE_URL,
      payload: {
        url: data.url,
      }
    }
};

export const fetchPageContent = () => {
  return function(dispatch) {
    return axios.get('output.json').then(response => {
        //console.log(response.data.data);
      dispatch(fetchContents(response.data.data));
    });
  };
}

export const fetchContents = (contents) => {
    return {
      type: FETCH_CONTENTS,
      contents
    }
  };
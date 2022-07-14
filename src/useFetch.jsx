import { clear } from "@testing-library/user-event/dist/clear";
import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null); //data is the content the browser renders on the client side
  const [errMsg, setErrMsg] = useState(null); //when the request endpoint has a problem fetching data, user will be notified the error
  const [isLoading, setIsLoading] = useState(true); //when the data is not completely fetched from the server, user needs to wait, hence initial state is always true
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          setData(null);
          throw Error("Requested Resource cannot be found"); //if response is false, throws an error
        }
        setIsLoading(false);
        return res.json(); //the requested data form the server is a json object hence need to be converted to a js object
      })
      .then((data) => {
        setErrMsg(null);
        setData(data); //the server data is set to client browser data which is rendered on the screen
      })
      .catch((err) => {
        setErrMsg(err.message); //the error thrown is catched in this block. This is the last step because, the response determines if there is an error
        setIsLoading(false);
      });
  }, [url]);

  return { data, errMsg, isLoading };
}

export default useFetch;

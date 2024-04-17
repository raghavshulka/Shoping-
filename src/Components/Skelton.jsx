import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchStatusActions } from "../Store/fetchStatusSlice";
import { itemsAction } from "../Store/ReducerMethog";

const Skelton = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    axios.get("http://localhost:8080/items").then(function (res) {
      dispatch(fetchStatusActions.markFetchDone());
      dispatch(fetchStatusActions.markFetchingFinished());
      dispatch(itemsAction.addinitialItem(res.data.items[0]));
    });
  }, [itemsAction, fetchStatus]);
  return <></>;
};

export default Skelton;

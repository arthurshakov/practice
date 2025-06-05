import { useEffect } from "react";
import { useStore } from "react-redux";

export const useResetForm = (reset) => {
  const store = useStore();

  useEffect(() => {
    let prevWasLogout = store.getState().app.wasLogout;

    return store.subscribe(() => {
      let currentLogout = prevWasLogout;
      currentLogout = store.getState().app.wasLogout;

      if (currentLogout !== prevWasLogout) {
        reset();
      }
    });
  }, [reset, store]);
}

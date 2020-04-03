import { useContext, useEffect } from "react";
import { Context as AuthContext } from "../context/AuthContext";

// Screen added to resolve user authenticated or not

const ResolveAuthScreen = () => {
  const { localSignin } = useContext(AuthContext);
  useEffect(() => {
    localSignin();
  }, []);
  return null;
};

export default ResolveAuthScreen;

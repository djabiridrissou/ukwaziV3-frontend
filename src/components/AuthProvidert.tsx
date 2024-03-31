import { useEffect, useState } from "react";
import Loading from "./Loading";


function AuthProvider({ children }: any) {
  const [isLoading] = useState(true);

  useEffect(() => {
    
  }, []);

  return (
    <Loading isLoading={isLoading} children={children} />
  );
}

export default AuthProvider;
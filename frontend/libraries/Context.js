import React, { useState } from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
	const [auth, setAuth] = useState();
	return (
		<Context.Provider
			value={{
				auth,
				setAuth,
			}}>
			{children}
		</Context.Provider>
	);
};

export { Context, ContextProvider };

import React from "react";

type ContextState =
  {status: 'LOADING' | 'ERROR' | 'LOADED'; codes?: CountryData[]};

export interface CountryData {
  Country: string;
  Slug: string;
  ISO2: string;
}
const Context = React.createContext<ContextState | null>(null);

export const useCountryCodes = (): ContextState => {
  const contextState = React.useContext(Context);
  if (contextState === null) {
    throw new Error('useItemData must be used within a ItemDataProvider tag');
  }
  return contextState;
};

export const CountryCodesProvider: React.FC = (props) => {
  const [state, setState] =
    React.useState<ContextState>({status: 'LOADING'});

  React.useEffect(() => {
    setState({status: 'LOADING'});

    fetch(`https://api.covid19api.com/countries`)
      .then(r => r.json())
      .then(countries => {
        setState({
          status: 'LOADED',
          codes: (countries as CountryData[]).slice(0, 10)
        });
      })
  }, [null]);

  return (
    <Context.Provider value={state}>
      {props.children}
    </Context.Provider>
  );
};

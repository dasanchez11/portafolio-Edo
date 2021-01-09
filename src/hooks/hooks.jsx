import React, {useCallback,useState} from 'react';

function useToggle(initialValue=false) {
  const [value,setValue] = useState(initialValue);

  const toggle = useCallback(()=> {
    setValue (val => !val );
  },[]);

  return [value,toggle]
}

export default useToggle;

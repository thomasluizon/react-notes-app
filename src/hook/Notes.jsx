import { useEffect } from 'react';

export default notes => {
   useEffect(() => {
      localStorage.setItem('react-notes-data', JSON.stringify(notes));
   }, [notes]);
};

import React from 'react';
import '../Styles/Inline.css'; // Regular CSS file
import styles from '../Styles/Inline.module.css'; // CSS Module

function Inline() {
     const heading = {
          fontSize: '50px',
          color: 'blue',
          // border: '1px solid red',
          // padding: '10px',
          // margin: '10px',
     };

     return (
          <>
               <div>
                    <h1 style={heading}>Inline</h1>
               </div>
               <div>
                    <h1 className="error">Error</h1>
               </div>
               <div>
                    <h1 className={styles.success}>Success</h1>
               </div>
          </>
     );
}

export default Inline;

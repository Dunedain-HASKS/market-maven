
import * as React from 'react';

export const Loading = () => {
  return (
    <div className='container text-center' spacing={8} style={{marginTop: "37vh"}}>
        <div className='display-1'>
            Loading...
        </div>
      <div className="d-flex justify-content-center">
        <div className="spinner-border mt-3" style={{width: "3rem", height: "3rem"}} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
    </div>
  );
}
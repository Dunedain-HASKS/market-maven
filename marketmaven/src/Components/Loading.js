
import * as React from 'react';

export const Loading = () => {
  return (
    <div className='container text-center' spacing={8} style={{marginTop: "37vh"}}>
        <div className='display-1'>
            Loading...
        </div>
      <div class="d-flex justify-content-center">
        <div class="spinner-border mt-3" style={{width: "3rem", height: "3rem"}} role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    </div>
  );
}
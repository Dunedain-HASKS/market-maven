import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import '@fontsource/montserrat'

export const Error404 = () => {
    // const [variant, setVariant] = React.useState('solid');
    return (
        <div className="error404" style={{fontFamily: "Montserrat"}}>
            <div>
                <div style={{marginTop: "50px", marginLeft: "25px"}}>
                    {/* <h1 className="h1">Error 404!</h1> */}
                    <Typography variant="h1" style={{color: "red"}}>
                        Error 404!
                    </Typography>
                    {/* <h2 className="">We can't find the page you're looking for.</h2> */}
                    <Typography variant="h5" gutterBottom style={{marginLeft: "8px"}}>
                        We can't find the page you're looking for.
                    </Typography>
                    {/* <div className="d-flex justify-content-start">
                        <a href="#/" className="btn btn-light mt-2" style={{fontSize: "18px"}}>Go Home</a>
                    </div> */}
                    <Button size="large" variant="contained" style={{marginLeft: "10px", marginTop: "5px", color: "white"}}>Go Home</Button>
                </div>
                </div>
        </div>
    );
    }   
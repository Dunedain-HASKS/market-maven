import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/montserrat';
import '@fontsource/lato';
import { useNavigate } from 'react-router-dom';

export const Error404 = () => {
    const navigate = useNavigate();
    return (
        <div className="error404">
            <div>
                <div style={{ marginLeft: "25px"}}>
                    <Typography variant="h1" style={{color: "red", fontFamily: "Lato"}}>
                        Error 404!
                    </Typography>
                    <Typography variant="h5" gutterBottom style={{marginLeft: "8px", fontFamily: "Montserrat"}}>
                        We can't find the page you're looking for.
                    </Typography>
                    <Button size="large" variant="contained" style={{marginLeft: "10px", marginTop: "5px", color: "white", fontFamily: "Montserrat"}} onClick={() => navigate("/")} >Go Home</Button>
                </div>
                </div>
        </div>
    );
    }   
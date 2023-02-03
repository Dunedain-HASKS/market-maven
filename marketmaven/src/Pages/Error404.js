export const Error404 = () => {
    return (
        <div className="container-fluid d-flex justify-content-start error404 flex-col">
            <div className="row">
                <div className="col error-col" style={{marginTop: "50px", marginLeft: "25px"}}>
                    <h1 className="display-1">Error 404!</h1>
                    <h2 className="">We can't find the page you're looking for.</h2>
                    <div className="d-flex justify-content-start">
                        <a href="#/" className="btn btn-light mt-2" style={{fontSize: "18px"}}>Go Home</a>
                    </div>
                </div>
                </div>
        </div>
    );
    }
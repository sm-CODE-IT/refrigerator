const RefrigeratorOpen = () => {

    const env = process.env;
    env.PUBLIC_URL = env.PUBLIC_URL || "";


    return (
        <div>
            <div className="img_open">
                <img src={process.env.PUBLIC_URL + `assets/open_refrigerator.png`} />
            </div>
        </div>
    );  
};
export default RefrigeratorOpen;
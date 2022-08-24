import React from "react";
import GoogleLogin from "react-google-login";

const clientId = "OAuth Web Client ID";

export default function GoogleButton() {
    const onSuccess = async(response) => {
        console.log(response);

        const {googleId, profileObj : { email, name }} = response;

        console.log(response);
    }

    const onFailure = (error) => {
        console.log(error);
    }

    return(
        <div>
            <GoogleLogin
                clientId={'404875762287-9m97othtr1jvbl29ph386pmldhlvtup7.apps.googleusercontent.com'}
                responseType={'id_token'}
                onSuccess={onSuccess}
                onFailure={onFailure} />
        </div>
    )
}
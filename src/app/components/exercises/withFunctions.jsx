import React from "react";
import CardWrapper from "../common/Card";

const withFunctions = (Component) => (props) => {
    // const [isAuth, setIsAuth] = useState();
    // useEffect(() => {
    //     if (localStorage.getItem("auth") === "token") {
    //         setIsAuth(true);
    //     } else {
    //         setIsAuth(false);
    //     }
    // }, []);

    const onLogin = () => {
        localStorage.setItem("auth", "token");
        console.log(typeof isAuth, isAuth());
    };

    const onLogOut = () => {
        localStorage.removeItem("auth");
        console.log(typeof isAuth, isAuth());
    };

    const isAuth = () => {
        if (localStorage.getItem("auth") === "token") {
            return true;
        } else {
            return false;
        }
    };

    return (
        <CardWrapper>
            <Component
                {...props}
                onLogin={onLogin}
                onLogOut={onLogOut}
                isAuth={isAuth()}
            />
        </CardWrapper>
    );
};

export default withFunctions;

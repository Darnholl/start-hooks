import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <>
            {!isAuth ? (
                <>
                    <p>Вы не залогинены:</p>
                    <button onClick={onLogin}>Войти</button>
                </>
            ) : (
                <>
                    <p>Вы в системе:</p>
                    <button onClick={onLogOut}>Выйти из системы</button>
                </>
            )}
        </>
    );
};

SimpleComponent.propTypes = {
    isAuth: PropTypes.bool,
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func
};

export default SimpleComponent;

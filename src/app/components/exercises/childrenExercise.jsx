import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const LiComponent = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        console.log(child, index);
        return React.cloneElement(child, {
            ...child.props,
            testNumb: index + 1
        });
    });
};

LiComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <LiComponent>
                <Component />
                <Component />
                <Component />
            </LiComponent>
        </CollapseWrapper>
    );
};

const Component = ({ testNumb }) => {
    return <div>{testNumb} Компонент списка</div>;
};

Component.propTypes = {
    testNumb: PropTypes.number
};

export default ChildrenExercise;

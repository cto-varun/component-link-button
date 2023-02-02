import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { useLocation, useHistory } from 'react-router-dom';

export default function LinkButton({
    href,
    children,
    onClick,
    routeData,
    src,
    ...props
}) {
    const { search, hash } = useLocation();
    const history = useHistory();
    const urlAfterHash = hash && hash.split('?')[1];

    // Whole url to push
    const url = urlAfterHash
        ? `${href}?${urlAfterHash}`
        : search
        ? `${href}${search}`
        : href;

    const handleClick = () => {
        onClick && onClick();
        history.push(url, {
            routeData: routeData,
            src: src,
        });
    };

    return (
        <Button {...props} onClick={handleClick}>
            {children}
        </Button>
    );
}

/** href And also accepts all the Button props */
LinkButton.propTypes = {
    /** href url to push */
    href: PropTypes.string,
};

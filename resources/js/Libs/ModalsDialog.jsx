import React from 'react';
import PropTypes from 'prop-types';
import { Dialog } from 'primereact/dialog';

const Modal = ({ visible, onHide, header, children, style, maximizable, footer, position }) => {
    return (
        <Dialog header={header} visible={visible} style={style} onHide={onHide} position={position} maximizable={maximizable} footer={footer}>
            {children}
        </Dialog>
    );
};

Modal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    header: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
    maximizable: PropTypes.bool,
    footer: PropTypes.object,
    position: PropTypes.string,
};

export default Modal;

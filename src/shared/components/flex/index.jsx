import './index.scss';
import React from 'react';
import PropTypes from 'prop-types';


const Flex = ({ children, ...props }) => {

  return (
    <div className={'flex-container'}>
      {children}
    </div>
  );
};


Flex.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Flex;

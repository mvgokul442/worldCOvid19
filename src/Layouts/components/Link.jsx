import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

function Links({ href, children }) {
  return (
    <Link href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>{children}</a>
    </Link>
  );
}

Links.propTypes = {
  href: PropTypes.string,
  children: PropTypes.string,
};

Links.defaultProps = {
  href: '',
  children: <div />,
};

export default Links;

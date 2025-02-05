import React from 'react';

export const Layout = ({ name, children }) => {
	return <main className={`${name}`}>{children}</main>;
};
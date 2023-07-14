import Head from 'next/head';
import './globals.css';

export const metadata = {
	title: 'Icosahedron',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}

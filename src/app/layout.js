import Head from 'next/head';
import './globals.css';

export const metadata = {
	title: '',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Head>
				<link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />
			</Head>
			<body>{children}</body>
		</html>
	);
}

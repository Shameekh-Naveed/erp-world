import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { Container as ContainerBase } from 'components/misc/Layouts.js';
import logo from '../../images/logo.jpeg';
import { ReactComponent as FacebookIcon } from '../../images/facebook-icon.svg';
import { ReactComponent as TwitterIcon } from '../../images/twitter-icon.svg';
import { ReactComponent as YoutubeIcon } from '../../images/youtube-icon.svg';

const Container = tw(ContainerBase)`bg-primary-500 text-gray-100 -mx-8 -mb-8`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex flex-col md:flex-row items-center justify-center px-8 gap-12`;

const Ball = tw.div`h-2 w-2 bg-gray-100 rounded-full`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`font-semibold text-lg flex flex-wrap justify-center items-center flex-col sm:flex-row`;
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 transition duration-300 mx-4`;

const SocialLinksContainer = tw.div``;
const SocialLink = styled.a`
	${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
	svg {
		${tw`w-8 h-8`}
	}
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`;
export default () => {
	return (
		<Container>
			<Content>
				<Row>
					<LogoContainer>
						<LogoImg src={logo} />
						<LogoText>ERP World</LogoText>
					</LogoContainer>
					<Ball />
					<LinksContainer>
						<Link href='#'>Home</Link>
						<Link href='#'>About</Link>
						<Link href='#'>Contact Us</Link>
						<Link href='#'>Reviews</Link>
					</LinksContainer>
					<Ball />

					<SocialLinksContainer>
						<SocialLink href='https://facebook.com'>
							<FacebookIcon />
						</SocialLink>
						<SocialLink href='https://twitter.com'>
							<TwitterIcon />
						</SocialLink>
						<SocialLink href='https://youtube.com'>
							<YoutubeIcon />
						</SocialLink>
					</SocialLinksContainer>
				</Row>
				<CopyrightText>&copy; Copyright 2024, ERP World. All Rights Reserved.</CopyrightText>
			</Content>
		</Container>
	);
};

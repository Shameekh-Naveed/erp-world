import React from 'react';
import tw from 'twin.macro';
import { css } from 'styled-components/macro'; //eslint-disable-line
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
import Hero from 'components/hero/TwoColumnWithVideo.js';
import Features from 'components/features/ThreeColWithSideImage.js';
import MainFeature from 'components/features/TwoColWithButton.js';
import MainFeature2 from 'components/features/TwoColWithTwoHorizontalFeaturesAndButton.js';
import FeatureWithSteps from 'components/features/TwoColWithSteps.js';
import Pricing from 'components/pricing/ThreePlans.js';
// import Testimonial from 'components/testimonials/TwoColumnWithImageAndRating.js';
import FAQ from 'components/faqs/SingleCol.js';
import GetStarted from 'components/cta/GetStarted';
import Footer from 'components/footers/FiveColumnWithBackground.js';
import heroScreenshotImageSrc from 'images/hero-screenshot-1.png';
import macHeroScreenshotImageSrc from 'images/hero-screenshot-2.png';
import StatsSection from 'components/features/TwoColSingleFeatureWithStats2.js';
import prototypeIllustrationImageSrc from 'images/prototype-illustration.svg';
import { ReactComponent as BriefcaseIcon } from 'feather-icons/dist/icons/briefcase.svg';
import { ReactComponent as MoneyIcon } from 'feather-icons/dist/icons/dollar-sign.svg';
import styled from 'styled-components';
import Testimonial from 'components/testimonials/ThreeColumnWithProfileImage.js';
import DownloadApp from 'components/cta/DownloadApp.js';
import MazenLogo from 'images/mazen.jpeg';

export default () => {
	const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
	const HighlightedText = tw.span`text-primary-500`;
	const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;

	return (
		<AnimationRevealPage>
			<Hero roundedHeaderButton={true} />
			{/* <Features /> */}
			<MainFeature
				heading={
					<>
						Empower Your School with <HighlightedText> ERP World </HighlightedText>
					</>
				}
				subheading={<Subheading>Revolutionizing Educational Management</Subheading>}
				imageSrc={heroScreenshotImageSrc}
				imageBorder={true}
				imageDecoratorBlob={true}
			/>
			<FeatureWithSteps
				subheading={<Subheading>STEPS</Subheading>}
				heading={
					<>
						Easy to <HighlightedText>Get Started.</HighlightedText>
					</>
				}
				textOnLeft={false}
				imageSrc={macHeroScreenshotImageSrc}
				imageDecoratorBlob={true}
				decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
			/>
			<Brands />
			<MainFeature2
				subheading={<Subheading>VALUES</Subheading>}
				heading={
					<>
						Commitment to <HighlightedText>Excellence.</HighlightedText>
					</>
				}
				imageSrc={prototypeIllustrationImageSrc}
				showDecoratorBlob={false}
				features={[
					{
						Icon: MoneyIcon,
						title: 'Innovation',
						description:
							'Continuously developing and implementing cutting-edge solutions to stay ahead in educational management.',
						iconContainerCss: tw`bg-green-300 text-green-800`,
					},
					{
						Icon: BriefcaseIcon,
						title: 'Reliability',
						description:
							'Ensuring that our platform is secure, dependable, and available whenever you need it.',
						iconContainerCss: tw`bg-red-300 text-red-800`,
					},
				]}
			/>

			<StatsSection />

			<Testimonial
				subheading={<Subheading>Testimonials</Subheading>}
				heading={
					<>
						Our Clients <HighlightedText>Love Us.</HighlightedText>
					</>
				}
				testimonials={[
					{
						stars: 5,
						imageSrc:
							'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80',
						heading: 'Amazing User Experience',
						quote: `The analytics and reporting features of ERP World have been game-changers for us. We can now make data-driven decisions that positively impact our school's operations and academic performance. Highly recommended!`,
						customerName: 'Nadeem Aslam',
						customerTitle: 'Director, Delos Inc.',
					},
					{
						stars: 5,
						imageSrc:
							'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80',
						heading: 'Love the Developer Experience and Design Principles !',
						quote: `ERP World has been a fantastic resource for me as a parent.
 I can easily monitor my child's attendance, grades, and upcoming events. The communication features allow me to stay connected with the school and teachers. It's a great tool for fostering parent-teacher collaboration`,
						customerName: 'Shameekh Naveed',
						customerTitle: 'Founder, EventsNYC',
					},
				]}
			/>
			<FAQ
				subheading={<Subheading>FAQS</Subheading>}
				heading={
					<>
						You have <HighlightedText>Questions ?</HighlightedText>
					</>
				}
				faqs={[
					{
						question: 'What is ERP World',
						answer: 'ERP World is a comprehensive ERP solution designed specifically for educational institutions, helping them manage all aspects of school operations efficiently through a web portal and mobile app.',
					},
					{
						question: 'Who can use ERP World?',
						answer: 'ERP World is suitable for students, parents, teachers, administrators, and branch managers, providing tailored features for each user group.',
					},
					{
						question: 'Is ERP World compatible with mobile devices?',
						answer: 'Yes, ERP World is available on both iOS and Android platforms, allowing users to access features on-the-go.',
					},
					{
						question: 'How secure is ERP World?',
						answer: 'We prioritize security and ensure that all data is encrypted and securely stored. Our platform adheres to the highest security standards to protect user information.',
					},
					{
						question: 'How does ERP World help with attendance management?',
						answer: 'ERP World allows teachers to mark attendance, and parents and administrators can monitor attendance records in real time through the web portal and mobile app.',
					},
					{
						question: 'Can I generate reports with ERP World?',
						answer: 'Yes, ERP World provides powerful tools for generating detailed and customized reports on various aspects of school operations, including attendance, finances, and academic performance.',
					},
					{
						question:
							'How does ERP World facilitate communication between parents, students, and teachers?',
						answer: 'ERP World includes features like instant messaging, daily diaries, and notices, ensuring seamless and effective communication between all parties involved.',
					},
					{
						question: 'What kind of support does ERP World offer?',
						answer: 'Our dedicated support team is available to assist you with any questions or issues. We provide expert guidance and solutions to ensure your institution runs smoothly.',
					},
					{
						question: 'How do I get started with ERP World?',
						answer: 'Contact Us',
					},
				]}
			/>
			<DownloadApp
				text={
					<>
						Experience the convenience of ERP World at your fingertips. Join thousands of users who are
						transforming their educational experience with our app.
						<HighlightedTextInverse>Get started now!</HighlightedTextInverse>
					</>
				}
			/>

			<Footer />
		</AnimationRevealPage>
	);
};

const BrandsContainer = tw.div`py-12 bg-white rounded-md`;
const ContentContainer = tw.div`mx-auto max-w-6xl px-6 lg:px-8`;
const Heading = tw.h2`text-center text-lg font-semibold leading-8 text-gray-900`;
const LogosGrid = tw.div`mx-auto mt-10 gap-16 max-w-lg flex items-center justify-center sm:max-w-xl lg:mx-0 lg:max-w-none `;
const LogoImage = styled.img`
	${tw`w-32 h-auto`}
`;
// ${({ lgColSpan1 }) => lgColSpan1 && tw`lg:col-span-1`}
// ${({ smColStart2 }) => smColStart2 && tw`sm:col-start-2`}
// ${({ colStart2 }) => colStart2 && tw`col-start-2 sm:col-start-auto`}

const Brands = () => (
	<BrandsContainer>
		<ContentContainer>
			<Heading>Trusted by the world’s most innovative teams</Heading>
			<LogosGrid>
				<LogoImage
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVR-ObVGXjPcpMsc2ukHadEJCCTQDAavONiA&s'
					alt='Transistor'
					width={158}
					height={48}
					lgColSpan1
				/>
				<LogoImage
					src={MazenLogo}
					// src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVR-ObVGXjPcpMsc2ukHadEJCCTQDAavONiA&s'
					alt='Transistor'
					width={158}
					height={48}
					lgColSpan1
				/>
			</LogosGrid>
		</ContentContainer>
	</BrandsContainer>
);

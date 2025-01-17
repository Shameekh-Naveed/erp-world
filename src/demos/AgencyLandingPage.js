import React from 'react';
import tw from 'twin.macro'; //eslint-disable-line
import { css } from 'styled-components/macro'; //eslint-disable-line
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';

import Hero from 'components/hero/TwoColumnWithInput';
import Features from 'components/features/ThreeColWithSideImage';
import MainFeature from 'components/features/TwoColSingleFeatureWithStats2.js';
import MainFeature2 from 'components/features/TwoColWithTwoFeaturesAndButtons.js';
import Portfolio from 'components/cards/PortfolioTwoCardsWithImage.js';
import Blog from 'components/blogs/ThreeColSimpleWithImageAndDashedBorder.js';
import Testimonial from 'components/testimonials/TwoColumnWithImageAndProfilePictureReview.js';
import FAQ from 'components/faqs/SimpleWithSideImage.js';
import ContactUsForm from 'components/forms/TwoColContactUsWithIllustration.js';
import Footer from 'components/footers/MiniCenteredFooter';
import customerSupportIllustrationSrc from 'images/customer-support-illustration.svg';
import ShieldIconImage from 'images/shield-icon.svg';

const expertiseCards = [
	{
		imageSrc: ShieldIconImage,
		title: 'Financial Auditing',
		description:
			'We provide thorough audits to ensure that your organization’s Standard Operating Procedures (SOPs) are effective and strictly followed. From monthly receipt collection audits to verifying outstanding accounts, we leave no detail unchecked.',
	},
	{
		imageSrc: ShieldIconImage,
		title: 'Taxation Services',
		description:
			' Our team specializes in optimizing tax strategies, minimizing waste, and ensuring compliance with the Federal Board of Revenue (FBR). We help you present accurate data and reduce unnecessary tax burdens, giving you peace of mind.',
	},
	{
		imageSrc: ShieldIconImage,
		title: 'Monthly and Annual Financial Reporting',
		description:
			'Understanding your organization’s financial health is crucial. We provide detailed profit and loss reports, analyze liabilities, and explain the rationale behind each financial decision to help you make informed choices.',
	},
	{
		imageSrc: ShieldIconImage,
		title: 'Documentation & Verification',
		description:
			' Accurate documentation is the backbone of financial integrity. We assist with organizing and verifying records, ensuring that all supporting documents are in place for smooth operations.',
	},
	{
		imageSrc: ShieldIconImage,
		title: 'Procurement Audits',
		description:
			'From purchase requisitions to payments and asset deliveries, we ensure that every step in your procurement process is efficient and compliant with established policies.',
	},
];

export default () => (
	<AnimationRevealPage>
		<Hero />
		<MainFeature
			heading={
				<>
					Partner with us for a transparent, reliable path to <span tw='text-primary-500'>lasting financial success!</span>
				</>
			}
			description=' We are dedicated to providing exceptional financial auditing, taxation, and
 reporting services. Our mission is to ensure financial transparency,
 compliance, and efficiency for every client we serve. With years of
 experience and a proven track record, we’ve successfully helped
 organizations streamline their financial operations, improve collection
 processes, and ensure compliance with regulatory standards.'
		/>
		<Features
			heading=' Our Expertise'
			description='Delivering precision-driven financial services to optimize compliance, efficiency, and growth'
			cards={expertiseCards}
		/>
		<MainFeature2 />
		<Portfolio />
		<Testimonial
			subheading='Testimonials'
			heading={
				<>
					Our Clients <span tw='text-primary-500'>Love Us.</span>
				</>
			}
			description='Here are what some of our amazing customers are saying about our marketing professionals. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			testimonials={[
				{
					imageSrc:
						'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80',
					profileImageSrc:
						'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80',
					quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
					customerName: 'Charlotte Hale',
					customerTitle: 'CEO, Tesla Inc.',
				},
				{
					imageSrc: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80',
					profileImageSrc:
						'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80',
					quote: 'Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
					customerName: 'Adam Cuppy',
					customerTitle: 'Founder, Nestle',
				},
			]}
			textOnLeft={true}
		/>
		<FAQ
			imageSrc={customerSupportIllustrationSrc}
			imageContain={true}
			imageShadow={false}
			description='Here are some frequently asked questions about our financial auditing and taxation services from our valued clients. If you have any other questions, don’t hesitate to reach out to us using the contact form below'
			subheading='FAQs'
			faqs={faqs}
			heading={
				<>
					Do you have <span tw='text-primary-500'>Questions ?</span>
				</>
			}
		/>
		{/* <Blog /> */}
		{/* <ContactUsForm /> */}
		<Footer />
	</AnimationRevealPage>
);

const faqs = [
	{
		question: 'What industries do you serve ?',
		answer: 'We provide services to a wide range of industries, including educational institutions, small to mid-sized businesses, and non-profit organizations.',
	},
	{
		question: ' How often should audits be conducted ?',
		answer: 'While every organization is different, we recommend monthly audits to ensure compliance, identify inefficiencies early, and maintain financial health.',
	},
	{
		question: 'How can you help with taxation ?',
		answer: 'We assist in preparing tax documentation, ensuring compliance with FBR regulations, and minimizing tax wastage through strategic planning and reporting.',
	},
	{
		question: 'How do you ensure transparency in your work ?',
		answer: 'Transparency is a core value of our operations. We provide detailed reports, document every step of our process, and keep you informed throughout our engagement.',
	},
	{
		question: 'Can you customize your services to our specific needs ?',
		answer: 'Absolutely! We tailor our services to address the unique challenges and requirements of your organization, ensuring a personalized approach to every engagement.',
	},
];

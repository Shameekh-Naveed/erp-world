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
import customerSupportIllustrationSrc from 'images/faq.svg';
import Audit from 'images/icons8/audit.png';
import Auditing from 'images/icons8/auditing.png';
import DocumentVerification from 'images/icons8/document_verifications.png';
import FinancialReporting from 'images/icons8/financial_reporting.png';
import Taxation from 'images/icons8/taxation.png';
import BlogSection from 'components/custom/blogSection';
import PRFeatures from 'components/features/PRFeatures';
import DigitalCurrency from 'images/Used/digitalCurrency.svg';

const expertiseCards = [
	{
		imageSrc: Auditing,
		title: 'Financial Auditing',
		description:
			'We provide thorough audits to ensure that your organization’s Standard Operating Procedures (SOPs) are effective and strictly followed. From monthly receipt collection audits to verifying outstanding accounts, we leave no detail unchecked.',
	},
	{
		imageSrc: Taxation,
		title: 'Taxation Services',
		description:
			' Our team specializes in optimizing tax strategies, minimizing waste, and ensuring compliance with the Federal Board of Revenue (FBR). We help you present accurate data and reduce unnecessary tax burdens, giving you peace of mind.',
	},
	{
		imageSrc: FinancialReporting,
		title: 'Monthly and Annual Financial Reporting',
		description:
			'Understanding your organization’s financial health is crucial. We provide detailed profit and loss reports, analyze liabilities, and explain the rationale behind each financial decision to help you make informed choices.',
	},
	{
		imageSrc: DocumentVerification,
		title: 'Documentation & Verification',
		description:
			' Accurate documentation is the backbone of financial integrity. We assist with organizing and verifying records, ensuring that all supporting documents are in place for smooth operations.',
	},
	{
		imageSrc: Audit,
		title: 'Procurement Audits',
		description:
			'From purchase requisitions to payments and asset deliveries, we ensure that every step in your procurement process is efficient and compliant with established policies.',
	},
];

const statistics = [
	{
		key: 'Years',
		value: '20+',
	},
	{
		key: 'Institutes',
		value: '10+',
	},
	{
		key: 'Saved in finances',
		value: '$$$',
	},
];
const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;

export default () => (
	<AnimationRevealPage>
		<Hero
			header={
				<>
					Partner with Us for Lasting Impact <span tw='text-primaryy-500'>on Your Business!</span>
				</>
			}
			imgSrc={DigitalCurrency}
			paragraph="Whether you're looking to elevate your brand's public relations or transform your business through innovative software solutions, we are here to help. Let’s work together to create a strong, future-ready brand and business ecosystem."
		/>
		<MainFeature
			statistics={statistics}
			heading={
				<>
					PR Brilliance Meets Tech Innovation <span tw='text-primaryy-500'>Elevate, Transform, Succeed!</span>
				</>
			}
			description='Supercharge your brand and business with expert PR strategies and cutting-edge software solutions! With over 8 years of experience, our team specializes in crafting powerful brand narratives, managing crises, and leveraging AI-driven insights to amplify your voice. From strategic media engagement to digital content creation, we ensure your brand stands out. Meanwhile, our custom software solutions—powered by AI, cloud computing, and automation—help businesses streamline operations, enhance security, and scale seamlessly. Whether you need impactful PR or next-gen tech solutions, we deliver innovation, strategy, and results. Let’s build a future-ready brand together! 🚀'
			variant={2}
		/>
		{/* <Features
			heading='Our Expertise'
			description='Delivering precision-driven financial services to optimize compliance, efficiency, and growth'
			cards={expertiseCards}
			variant={2}
		/> */}
		<PRFeatures
			subheading={<Subheading>STEPS</Subheading>}
			textOnLeft={false}
			imageDecoratorBlob={true}
			decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
		/>
		<MainFeature2
			heading={
				<>
					We have a <span tw='text-primaryy-500'>dedicated</span> team of experts.
				</>
			}
			description='Our specialists craft compelling brand narratives, manage media relations, and handle crisis communication to enhance your brand’s reputation. From media engagement to software development, we ensure precision and innovation in every project.'
			variant={2}
		/>

		{/* <MainFeature2 variant={2} /> */}
		{/* <Portfolio variant={2} /> */}
		{/* <BlogSection /> */}
		{/* <Testimonial
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
		/> */}
		{/* <FAQ
			imageSrc={customerSupportIllustrationSrc}
			imageContain={true}
			imageShadow={false}
			description='Here are some frequently asked questions about our financial auditing and taxation services from our valued clients. If you have any other questions, don’t hesitate to reach out to us using the contact form below'
			subheading='FAQs'
			faqs={faqs}
			heading={
				<>
					Do you have <span tw='text-primaryy-500'>Questions ?</span>
				</>
			}
			variant={2}
		/> */}
		{/* <Blog /> */}
		{/* <ContactUsForm /> */}
		<Footer variant={2} />
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

import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from 'styled-components/macro'; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from 'components/misc/Headings.js';
import TeamIllustrationSrc from 'images/team-illustration-2.svg';
import { ReactComponent as SvgDotPattern } from 'images/dot-pattern.svg';
import { ReactComponent as BriefcaseIcon } from 'feather-icons/dist/icons/briefcase.svg';
import { ReactComponent as MoneyIcon } from 'feather-icons/dist/icons/dollar-sign.svg';

const Container = tw.div`relative flex flex-col items-center`;
const TwoColumnContainer = tw.div`py-20 md:py-24 flex flex-col items-center`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-8 items-center`;
const HighlightedText = tw.span`text-primary-500`;

const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)((props) => [
	tw`md:w-6/12 mt-16 md:mt-0`,
	props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.img((props) => [
	props.imageRounded && tw`rounded`,
	props.imageBorder && tw`border`,
	props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = styled(SvgDotPattern)(() => [
	tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
	SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

const HeadingMinor = tw(SectionHeading)`text-center md:text-left text-2xl sm:text-3xl lg:text-4xl`;

const Steps = tw.ul`mt-12`;
const Step = tw.li`mt-8 flex flex-col md:flex-row items-center md:items-start`;
const StepNumber = tw.div`font-semibold text-4xl leading-none text-gray-400`;
const StepText = tw.div`mt-3 md:mt-0 md:ml-6`;
const StepHeading = tw.h6`leading-none text-xl font-semibold`;
const StepDescription = tw.p`mt-3 max-w-xs leading-loose text-sm text-gray-600 font-medium`;

const Description = tw.p`mt-8 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Features = tw.div`mx-auto md:mx-0 flex flex-col md:flex-row max-w-xs lg:max-w-screen-lg mx-auto items-center justify-center`;
const Feature = tw.div`mt-10 lg:mt-8 flex items-center md:items-start flex-col md:mr-8 last:mr-0`;

const FeatureHeadingContainer = tw.div`flex items-center`;
const FeatureIconContainer = styled.div`
	${tw`mx-auto inline-block border border-primary-500 text-primary-500 text-center rounded p-2 flex-shrink-0`}
	${(props) => [
		props.iconRoundedFull && tw`rounded-full`,
		props.iconFilled && tw`border-0 bg-primary-500 text-gray-100`,
	]}
  svg {
		${tw`w-5 h-5`}
	}
`;
const FeatureHeading = tw.div`ml-3 font-bold text-xl`;

const FeatureDescription = tw.div`mt-4 text-center md:text-left text-gray-600 leading-relaxed`;

export default ({
	subheading = 'Our Expertise',
	heading = (
		<>
			Designed & Developed by <span tw='text-primary-500'>Professionals.</span>
		</>
	),
	imageSrc = TeamIllustrationSrc,
	imageRounded = true,
	imageBorder = false,
	imageShadow = false,
	imageDecoratorBlob = false,
	textOnLeft = true,
	steps = null,
	decoratorBlobCss = null,
	iconRoundedFull = true,
	iconFilled = true,
	iconContainerCss = null,
}) => {
	// The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

	const defaultSteps = [
		{
			heading: 'Register',
			description: 'Create an account with us using Google or Facebook.',
		},
		{
			heading: 'Download',
			description: 'Browse and Download the template that you like from the marketplace.',
		},
		{
			heading: 'Run',
			description: 'Follow the instructions to setup and customize the template to your needs.',
		},
	];

	const defaultFeatures = [
		{
			Icon: BriefcaseIcon,
			title: 'Generate Reports',
			description:
				'Create detailed and customized reports on attendance, finances, academic performance, and more.',
			iconContainerCss: tw`bg-teal-300 text-teal-800`,
		},
		{
			Icon: MoneyIcon,
			title: 'Manage Finances',
			description: 'Track and manage fee collections, budgets, and financial records with ease.',
			iconContainerCss: tw`bg-red-300 text-red-800`,
		},
		{
			Icon: MoneyIcon,
			title: 'Oversee Operations',
			description:
				'Handle day-to-day administrative tasks, from scheduling and timetabling to staff management and communication.',
			iconContainerCss: tw`bg-red-300 text-red-800`,
		},
	];

	const defaultFeaturesMobile = [
		{
			Icon: BriefcaseIcon,
			title: 'Attendance Tracking',
			description:
				'Students can mark attendance, and parents and teachers can monitor attendance records in real time.',
			iconContainerCss: tw`bg-teal-300 text-teal-800`,
		},
		{
			Icon: MoneyIcon,
			title: 'Timetable Management',
			description: 'Access and update timetables, ensuring everyone is informed about schedules and changes.',
			iconContainerCss: tw`bg-red-300 text-red-800`,
		},
		{
			Icon: MoneyIcon,
			title: 'Fee Management',
			description:
				'View and pay fees securely through the app, keeping financial transactions simple and transparent.',
			iconContainerCss: tw`bg-red-300 text-red-800`,
		},
		{
			Icon: MoneyIcon,
			title: 'Daily Diaries and Notices',
			description:
				'Maintain daily logs, share important notices, and facilitate seamless communication between all parties involved.',
			iconContainerCss: tw`bg-red-300 text-red-800`,
		},
	];

	if (!steps) steps = defaultSteps;

	return (
		<Container>
			<div>
				<Subheading>{subheading}</Subheading>
				<Heading>
					Comprehensive Functionality for <HighlightedText>Every User </HighlightedText>
				</Heading>
			</div>
			<TwoColumnContainer>
				<TwoColumn>
					<ImageColumn>
						<Image
							src={imageSrc}
							imageBorder={imageBorder}
							imageShadow={imageShadow}
							imageRounded={imageRounded}
						/>
						{imageDecoratorBlob && <DecoratorBlob css={decoratorBlobCss} />}
					</ImageColumn>
					<TextColumn textOnLeft={textOnLeft}>
						<TextContent>
							<HeadingMinor>
								<HighlightedText>Web Portal:</HighlightedText> Administration and Management
							</HeadingMinor>
							<Description>
								Our web portal is designed to provide school administration and branch managers with
								powerful tools to manage all aspects of school operations efficiently. With a
								user-friendly interface and robust features, the web portal enables administrators to:
							</Description>
						</TextContent>
					</TextColumn>
				</TwoColumn>
				<Features>
					{defaultFeatures.map((feature, index) => (
						<Feature key={index}>
							<FeatureHeadingContainer>
								<FeatureIconContainer
									iconFilled={iconFilled}
									iconRoundedFull={iconRoundedFull}
									css={feature.iconContainerCss || iconContainerCss}>
									{<feature.Icon />}
								</FeatureIconContainer>
								<FeatureHeading>{feature.title}</FeatureHeading>
							</FeatureHeadingContainer>
							<FeatureDescription>{feature.description}</FeatureDescription>
						</Feature>
					))}
				</Features>
			</TwoColumnContainer>
			<TwoColumnContainer>
				<TwoColumn>
					<ImageColumn>
						<Image
							src={imageSrc}
							imageBorder={imageBorder}
							imageShadow={imageShadow}
							imageRounded={imageRounded}
						/>
						{imageDecoratorBlob && <DecoratorBlob css={decoratorBlobCss} />}
					</ImageColumn>
					<TextColumn textOnLeft={false}>
						<TextContent>
							<HeadingMinor>
								<HighlightedText>Mobile App: </HighlightedText> Enhancing Communication
							</HeadingMinor>
							<Description>
								The ERP World mobile app is tailored to meet the needs of students, parents, and
								teachers, providing a convenient and accessible way to stay connected and manage daily
								tasks. Available on both iOS and Android platforms, the mobile app offers:
							</Description>
						</TextContent>
					</TextColumn>
				</TwoColumn>
				<Features>
					{defaultFeaturesMobile.map((feature, index) => (
						<Feature key={index}>
							<FeatureHeadingContainer>
								<FeatureIconContainer
									iconFilled={iconFilled}
									iconRoundedFull={iconRoundedFull}
									css={feature.iconContainerCss || iconContainerCss}>
									{<feature.Icon />}
								</FeatureIconContainer>
								<FeatureHeading>{feature.title}</FeatureHeading>
							</FeatureHeadingContainer>
							<FeatureDescription>{feature.description}</FeatureDescription>
						</Feature>
					))}
				</Features>
			</TwoColumnContainer>
		</Container>
	);
};

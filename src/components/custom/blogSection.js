import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { SectionHeading, Subheading as SubheadingBase } from 'components/misc/Headings.js';
import { SectionDescription } from 'components/misc/Typography.js';

// const Section = tw.section`py-16 px-4 md:px-6`;
// const Container = tw.div`max-w-6xl mx-auto`;
// const Header = tw.div`text-center mb-12`;
// const Title = tw.h2`text-3xl font-bold mb-4`;
// const Highlight = tw.span`text-[#0066FF]`;
// const Description = tw.p`text-gray-600 max-w-2xl mx-auto`;
const Grid = tw.div`grid md:grid-cols-2 gap-8 mb-12 max-w-6xl`;
const Card = tw.div`bg-white rounded-lg overflow-hidden shadow-md`;
const CardImage = tw.img`w-full h-48 object-cover`;
const CardContent = tw.div`p-6`;
const CardTitle = tw.h3`font-semibold text-xl mb-2`;
const CardDescription = tw.p`text-gray-600 mb-4`;
const Strong = tw.strong`font-semibold`;

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
	${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4 text-primaryy-500`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-justify`;
const PrimaryText = tw.span`text-primaryy-500`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
	${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

// const Card = styled.div`
// 	${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
// 	.imageContainer {
// 		${tw`border text-center rounded-full p-5 flex-shrink-0`}
// 		img {
// 			${tw`w-6 h-6`}
// 		}
// 	}

// 	.textContainer {
// 		${tw`sm:ml-4 mt-4 sm:mt-2`}
// 	}

// 	.title {
// 		${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
// 	}

// 	.description {
// 		${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
// 	}
// `;

// const DecoratorBlob = styled(SvgDecoratorBlob3)`
// 	${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
// `;

export default function BlogSection() {
	// return (
	// 	<Section>
	// 		<Container>
	// 			<Header>
	// 				<Title>
	// 					Delivering Results
	// 					<Highlight> Across Industries.</Highlight>
	// 				</Title>
	// 				<Description>
	// 					We believe that our work speaks for itself. Here are a few examples of how we've made a difference for our clients:
	// 				</Description>
	// 			</Header>

	// 			<Grid>
	// 				<Card>
	// 					<CardImage
	// 						src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OSO7SR335HvnP6gDKA86Rup3kykbEF.png'
	// 						alt='Office meeting space'
	// 					/>
	// 					<CardContent>
	// 						<CardTitle>Sargodha Audit Project</CardTitle>
	// 						<CardDescription>
	// 							During an audit for an educational institution in Sargodha, we discovered a lack of annual fund allocation and focused
	// 							on improving their fee collection process. Our efforts revealed a <Strong>10% shortfall</Strong>, recovering nearly{' '}
	// 							<Strong>2.9 lacs</Strong> that had been underpaid to the head office.
	// 						</CardDescription>
	// 					</CardContent>
	// 				</Card>

	// 				<Card>
	// 					<CardImage
	// 						src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OSO7SR335HvnP6gDKA86Rup3kykbEF.png'
	// 						alt='Team collaboration'
	// 					/>
	// 					<CardContent>
	// 						<CardTitle>Payment SOP Optimization</CardTitle>
	// 						<CardDescription>
	// 							For a client struggling with inefficiencies in their payment processes, we <Strong>revamped their SOPs</Strong>,
	// 							streamlined their workflows, and ensured compliance. This not only <Strong>reduced errors</Strong> but also{' '}
	// 							<Strong>improved financial accountability</Strong>.
	// 						</CardDescription>
	// 					</CardContent>
	// 				</Card>

	// 				<Card>
	// 					<CardImage
	// 						src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OSO7SR335HvnP6gDKA86Rup3kykbEF.png'
	// 						alt='Financial planning session'
	// 					/>
	// 					<CardContent>
	// 						<CardTitle>Tax Savings Initiative</CardTitle>
	// 						<CardDescription>
	// 							We assisted a mid-sized business in <Strong>reducing tax waste by 15%</Strong> through strategic planning and
	// 							effective data presentation to the FBR, resulting in <Strong>significant savings</Strong>.
	// 						</CardDescription>
	// 					</CardContent>
	// 				</Card>
	// 			</Grid>
	// 		</Container>
	// 	</Section>
	// );

	return (
		<Container>
			<ThreeColumnContainer>
				{/* {subheading && <Subheading css={variant === 2 ? tw`text-primaryy-500` : ''}>{subheading}</Subheading>} */}
				<Subheading>Our Services</Subheading>
				<Heading>
					Delivering Results <PrimaryText>Across Industries</PrimaryText>
				</Heading>
				<Description>
					We believe that our work speaks for itself. Here are a few examples of how we've made a difference for our clients:
				</Description>
				<VerticalSpacer />
				<Grid>
					<Card>
						<CardImage
							src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OSO7SR335HvnP6gDKA86Rup3kykbEF.png'
							alt='Office meeting space'
						/>
						<CardContent>
							<CardTitle>Sargodha Audit Project</CardTitle>
							<CardDescription>
								During an audit for an educational institution in Sargodha, we discovered a lack of annual fund allocation and focused
								on improving their fee collection process. Our efforts revealed a <Strong>10% shortfall</Strong>, recovering nearly{' '}
								<Strong>2.9 lacs</Strong> that had been underpaid to the head office.
							</CardDescription>
						</CardContent>
					</Card>
					<Card>
						<CardImage
							src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OSO7SR335HvnP6gDKA86Rup3kykbEF.png'
							alt='Team collaboration'
						/>
						<CardContent>
							<CardTitle>Payment SOP Optimization</CardTitle>
							<CardDescription>
								For a client struggling with inefficiencies in their payment processes, we <Strong>revamped their SOPs</Strong>,
								streamlined their workflows, and ensured compliance. This not only <Strong>reduced errors</Strong> but also{' '}
								<Strong>improved financial accountability</Strong>.
							</CardDescription>
						</CardContent>
					</Card>
					<Card>
						<CardImage
							src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OSO7SR335HvnP6gDKA86Rup3kykbEF.png'
							alt='Financial planning session'
						/>
						<CardContent>
							<CardTitle>Tax Savings Initiative</CardTitle>
							<CardDescription>
								We assisted a mid-sized business in <Strong>reducing tax waste by 15%</Strong> through strategic planning and
								effective data presentation to the FBR, resulting in <Strong>significant savings</Strong>.
							</CardDescription>
						</CardContent>
					</Card>
				</Grid>
			</ThreeColumnContainer>
			{/* <DecoratorBlob /> */}
		</Container>
	);
}

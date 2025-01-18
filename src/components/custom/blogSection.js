import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { SectionHeading, Subheading as SubheadingBase } from 'components/misc/Headings.js';
import { SectionDescription } from 'components/misc/Typography.js';
import Image1 from '../../images/projects/pic1.jpg';
import Image2 from '../../images/projects/pic2.jpg';
import Image3 from '../../images/projects/pic3.jpeg';

const Grid = tw.div`grid md:grid-cols-2 gap-8 mb-12 max-w-6xl`;
const Card = tw.div`bg-white rounded-lg overflow-hidden shadow-md`;
const CardImage = tw.img`w-full h-48 object-cover`;
const CardContent = tw.div`p-6`;
const CardTitle = tw.h3`font-semibold text-xl mb-2`;
const CardDescription = tw.p`text-gray-600 mb-4 text-justify`;
const CardHeader = tw.h4`font-semibold text-lg mb-2`;
const CardList = tw.ul`list-disc pl-5 mb-4`;
const CardListItem = tw.li`text-gray-600 mb-1`;
const Strong = tw.strong`font-semibold text-primaryy-500`;

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
	${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4 text-primaryy-500`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-justify`;
const PrimaryText = tw.span`text-primaryy-500`;

const VerticalSpacer = tw.div`mt-10 w-full`;

export default function BlogSection() {
	// const projects = [
	// 	{
	// 		id: 1,
	// 		title: 'Comprehensive Financial System Overhaul for Educational Institutions',
	// 		summary:
	// 			'Led financial operations for Dar-e-Arqam Schools, overseeing a diverse team of accountants and finance officers. Modernized financial processes and implemented systems to manage accounting, payroll, and audit compliance across multiple regions.',
	// 		impact: [
	// 			'Implemented software for financial reporting and accounts management, streamlining the workflow across 15 regional offices.',
	// 			'Developed systems for effective monitoring of books printing and delivery for USWA Pvt. Ltd., a sister company of Dar-e-Arqam.',
	// 			'Enhanced accuracy and timeliness of financial reports, ensuring alignment with external audit standards.',
	// 		],
	// 		imageUrl: Image1,
	// 		imageAlt: 'Professional managing financial reports with team members in a modern office setting',
	// 	},
	// 	{
	// 		id: 2,
	// 		title: 'Internal Audit and Controls Implementation in Pesticide Distribution',
	// 		summary:
	// 			'At Agrolet Group, spearheaded internal audit initiatives and launched internal control systems to optimize financial and operational processes for a large-scale distribution network.',
	// 		impact: [
	// 			'Designed and implemented internal controls, reducing errors and improving transparency in accounting operations.',
	// 			'Conducted fortnightly/monthly audits, improving accuracy in bank reconciliations, payroll processing, and ledger maintenance.',
	// 			'Collaborated with external auditors to address and resolve key issues, minimizing expectation gaps.',
	// 		],
	// 		imageUrl: Image2,
	// 		imageAlt: 'A collaborative team audit session with files and charts or a logistics-focused image representing inventory and finance',
	// 	},
	// 	{
	// 		id: 3,
	// 		title: 'Tax Compliance and Reporting Excellence for Agro-Industrial Clients',
	// 		summary:
	// 			'Developed and managed taxation compliance for clients in manufacturing and agricultural sectors, ensuring adherence to legal requirements while minimizing liabilities.',
	// 		impact: [
	// 			'Filed monthly sales tax returns and annual income tax returns, ensuring 100% compliance with regulations.',
	// 			'Assisted in legal procedures and assessments, effectively negotiating favorable outcomes for clients.',
	// 			'Established streamlined e-filing systems for federal excise and sales tax, reducing processing time and increasing accuracy.',
	// 		],
	// 		imageUrl: Image3,
	// 		imageAlt: 'A visual of tax forms being filled digitally or a meeting with professionals discussing tax planning',
	// 	},
	// 	{
	// 		id: 4,
	// 		title: 'Financial Reporting Enhancement',
	// 		summary:
	// 			'Worked with a manufacturing client to overhaul their financial reporting systems in compliance with IFRS. Delivered improvements in transparency and accuracy for statements including financial position, performance, cash flows, and changes in equity.',
	// 		impact: [
	// 			'Streamlined the preparation and presentation of key financial documents.',
	// 			'Enabled the management to make data-driven decisions through accurate and timely financial reports.',
	// 			'Addressed variances effectively by integrating comprehensive budget reporting systems.',
	// 		],
	// 		imageUrl: Image1,
	// 		imageAlt: 'A corporate setting with professionals analyzing financial reports or a modern dashboard showing key financial metrics',
	// 	},
	// 	{
	// 		id: 5,
	// 		title: 'Tax Compliance and Planning Initiative',
	// 		summary:
	// 			'Collaborated with diverse clients to ensure compliance with local tax regulations, including income tax, sales tax, and service tax. Optimized tax planning to minimize liabilities while maintaining legal compliance.',
	// 		impact: [
	// 			'Developed and submitted accurate tax returns under various acts, ensuring no penalties.',
	// 			'Successfully addressed tax audits, managed refunds, and resolved notices from tax authorities.',
	// 			'Reduced tax liabilities for multiple clients through strategic planning.',
	// 		],
	// 		imageUrl: Image2,
	// 		imageAlt: 'A tax consultant reviewing documents with a client or a graphic showing reduced tax bills and planning tools',
	// 	},
	// 	{
	// 		id: 6,
	// 		title: 'Internal Controls and Audit Improvement',
	// 		summary:
	// 			'Conducted risk-based operational and financial audits for a public sector organization. Designed and implemented robust internal controls, aligning organizational policies with industry best practices.',
	// 		impact: [
	// 			'Identified key risks and mitigated vulnerabilities through enhanced policies.',
	// 			'Improved operational efficiency and regulatory compliance through targeted recommendations.',
	// 			'Built audit methodologies and trained staff to sustain long-term improvements.',
	// 		],
	// 		imageUrl: Image3,
	// 		imageAlt:
	// 			'An image of a team performing an audit with charts and files or a conceptual illustration of internal controls using gears and systems',
	// 	},
	// 	{
	// 		id: 7,
	// 		title: 'Sargodha Audit Project',
	// 		summary:
	// 			'During an audit for an educational institution in Sargodha, we discovered a lack of annual fund allocation and focused on improving their fee collection process.',
	// 		impact: ['Revealed a 10% shortfall in fee collection', 'Recovered nearly 2.9 lacs that had been underpaid to the head office'],
	// 		imageUrl: Image1,
	// 		imageAlt: 'Educational institution in Sargodha',
	// 	},
	// ];

	const projects = [
		{
			id: 1,
			title: 'Comprehensive Financial System Overhaul for Educational Institutions',
			summary: (
				<>
					Led financial operations for <Strong>Dar-e-Arqam Schools</Strong>, overseeing a diverse team of accountants and finance officers.
					Modernized financial processes and implemented systems to manage accounting, payroll, and audit compliance across multiple
					regions.
				</>
			),
			impact: [
				<>
					Implemented software for financial reporting and accounts management, streamlining the workflow across{' '}
					<Strong>15 regional offices</Strong>.
				</>,
				<>
					Developed systems for effective monitoring of books printing and delivery for <Strong>USWA Pvt. Ltd.</Strong>, a sister company of
					Dar-e-Arqam.
				</>,
				<>Enhanced accuracy and timeliness of financial reports, ensuring alignment with external audit standards.</>,
			],
			imageUrl: Image1,
			imageAlt: 'Professional managing financial reports with team members in a modern office setting',
		},
		{
			id: 2,
			title: 'Internal Audit and Controls Implementation in Pesticide Distribution',
			summary: (
				<>
					At <Strong>Agrolet Group</Strong>, spearheaded internal audit initiatives and launched internal control systems to optimize
					financial and operational processes for a large-scale distribution network.
				</>
			),
			impact: [
				<>Designed and implemented internal controls, reducing errors and improving transparency in accounting operations.</>,
				<>Conducted fortnightly/monthly audits, improving accuracy in bank reconciliations, payroll processing, and ledger maintenance.</>,
				<>Collaborated with external auditors to address and resolve key issues, minimizing expectation gaps.</>,
			],
			imageUrl: Image2,
			imageAlt: 'A collaborative team audit session with files and charts or a logistics-focused image representing inventory and finance',
		},
		{
			id: 3,
			title: 'Tax Compliance and Reporting Excellence for Agro-Industrial Clients',
			summary: (
				<>
					Developed and managed taxation compliance for clients in <Strong>manufacturing</Strong> and <Strong>agricultural</Strong> sectors,
					ensuring adherence to legal requirements while minimizing liabilities.
				</>
			),
			impact: [
				<>
					Filed monthly sales tax returns and annual income tax returns, ensuring <Strong>100% compliance</Strong> with regulations.
				</>,
				<>Assisted in legal procedures and assessments, effectively negotiating favorable outcomes for clients.</>,
				<>Established streamlined e-filing systems for federal excise and sales tax, reducing processing time and increasing accuracy.</>,
			],
			imageUrl: Image3,
			imageAlt: 'A visual of tax forms being filled digitally or a meeting with professionals discussing tax planning',
		},
		{
			id: 4,
			title: 'Financial Reporting Enhancement',
			summary: (
				<>
					Worked with a manufacturing client to overhaul their financial reporting systems in compliance with <Strong>IFRS</Strong>.
					Delivered improvements in transparency and accuracy for statements including financial position, performance, cash flows, and
					changes in equity.
				</>
			),
			impact: [
				<>Streamlined the preparation and presentation of key financial documents.</>,
				<>Enabled the management to make data-driven decisions through accurate and timely financial reports.</>,
				<>Addressed variances effectively by integrating comprehensive budget reporting systems.</>,
			],
			imageUrl: Image1,
			imageAlt: 'A corporate setting with professionals analyzing financial reports or a modern dashboard showing key financial metrics',
		},
		{
			id: 5,
			title: 'Tax Compliance and Planning Initiative',
			summary: (
				<>
					Collaborated with diverse clients to ensure compliance with local tax regulations, including <Strong>income tax</Strong>,{' '}
					<Strong>sales tax</Strong>, and <Strong>service tax</Strong>. Optimized tax planning to minimize liabilities while maintaining
					legal compliance.
				</>
			),
			impact: [
				<>Developed and submitted accurate tax returns under various acts, ensuring no penalties.</>,
				<>Successfully addressed tax audits, managed refunds, and resolved notices from tax authorities.</>,
				<>Reduced tax liabilities for multiple clients through strategic planning.</>,
			],
			imageUrl: Image2,
			imageAlt: 'A tax consultant reviewing documents with a client or a graphic showing reduced tax bills and planning tools',
		},
		{
			id: 6,
			title: 'Internal Controls and Audit Improvement',
			summary: (
				<>
					Conducted risk-based operational and financial audits for a <Strong>public sector organization</Strong>. Designed and implemented
					robust internal controls, aligning organizational policies with industry best practices.
				</>
			),
			impact: [
				<>Identified key risks and mitigated vulnerabilities through enhanced policies.</>,
				<>Improved operational efficiency and regulatory compliance through targeted recommendations.</>,
				<>Built audit methodologies and trained staff to sustain long-term improvements.</>,
			],
			imageUrl: Image3,
			imageAlt:
				'An image of a team performing an audit with charts and files or a conceptual illustration of internal controls using gears and systems',
		},
		{
			id: 7,
			title: 'Sargodha Audit Project',
			summary: (
				<>
					During an audit for an educational institution in <Strong>Sargodha</Strong>, we discovered a lack of annual fund allocation and
					focused on improving their fee collection process.
				</>
			),
			impact: [
				<>
					Revealed a <Strong>10% shortfall</Strong> in fee collection
				</>,
				<>
					Recovered nearly <Strong>2.9 lacs</Strong> that had been underpaid to the head office
				</>,
			],
			imageUrl: Image1,
			imageAlt: 'Educational institution in Sargodha',
		},
	];

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
					{projects.map((project, index) => (
						<Card key={index}>
							<CardImage src={project.imageUrl} alt={project.title} />
							<CardContent>
								<CardTitle>{project.title}</CardTitle>
								<CardDescription>{project.summary}</CardDescription>
								<CardHeader>Impact:</CardHeader>
								<CardList>
									{project.impact.map((impactPoint, index) => (
										<CardListItem key={index}>{impactPoint}</CardListItem>
									))}
								</CardList>
							</CardContent>
						</Card>
					))}
					{/* <Card>
						<CardImage src={Image1} alt='Office meeting space' />
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
						<CardImage src={Image2} alt='Team collaboration' />
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
						<CardImage src={Image3} alt='Financial planning session' />
						<CardContent>
							<CardTitle>Tax Savings Initiative</CardTitle>
							<CardDescription>
								We assisted a mid-sized business in <Strong>reducing tax waste by 15%</Strong> through strategic planning and
								effective data presentation to the FBR, resulting in <Strong>significant savings</Strong>.
							</CardDescription>
						</CardContent>
					</Card> */}
				</Grid>
			</ThreeColumnContainer>
			{/* <DecoratorBlob /> */}
		</Container>
	);
}

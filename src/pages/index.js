import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Image, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Menu, StackItem, Stack, Section, SocialMedia } from "@quarkly/components";
import { MdArrowDownward } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box
			display="flex"
			padding="12px 0"
			justify-content="space-between"
			align-items="center"
			flex-direction="row"
			md-flex-direction="column"
			lg-position="fixed"
			lg-width="100%"
			position="fixed"
			width="100%"
		>
			<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="--lead" />
			<Menu
				display="flex"
				justify-content="center"
				font="--base"
				font-weight="700"
				md-flex-direction="column"
				md-align-items="center"
				lg-font="a"
			>
				<Override
					slot="link"
					text-decoration="none"
					color="--lightD1"
					padding="6px 12px"
					link-color="#e0e5ec"
				/>
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px" />
				<Override slot="link-404">
					Home
				</Override>
				<Override slot="link-index">
					NEWS
				</Override>
			</Menu>
		</Box>
		<Section
			padding="140px 0"
			sm-padding="40px 0"
			background="linear-gradient(0deg,rgba(0,0,0,.2) 0%,rgba(0,0,0,.2) 100%),--color-dark url(https://images.unsplash.com/photo-1605466539496-10fe75156828?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000) 50% 15%/cover"
			color="--light"
			font="--base"
		>
			<Box>
				<Text
					as="h1"
					margin="0 0 96px 0"
					text-align="center"
					letter-spacing="50px"
					text-transform="uppercase"
					font="100 132px/1.2 --fontFamily-sans"
					lg-font="200 42px/1.2 --fontFamily-sans"
					lg-letter-spacing="20px"
				>
					information about me{"\n"}
				</Text>
			</Box>
			<Stack>
				<StackItem
					width="25%"
					lg-width="50%"
					sm-width="100%"
					font="--lead"
					text-transform="uppercase"
					letter-spacing="1px"
				>
					<Text margin="0px">
						About me
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Text margin="0px">
						My name is Le Huu Truong .{" "}
						<br />
						I'm 21 years old, I have hobbies to sing, play the guitar and code.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Text margin="0px">
						I am a 3rd year student at Ton Duc Thang University and as a student of the English talk center, I completed a frontend course at Cybersoft-Academy.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Text margin="0px">
						Currently I am a freelancer and I am working as a tutor at the center where I studied
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section text-align="center" padding="100px 0" sm-padding="40px 0">
			<Text as="h1" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				About Me
			</Text>
			<Text as="p" font="--lead" margin="20px 0 0 0">
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.{" "}
			</Text>
			<Box display="flex" margin="40px 0 20px 0" justify-content="space-around" sm-flex-direction="column">
				<Box padding="10px" />
				<Box padding="10px">
					<Image src="https://uploads.quarkly.io/5fb296ddb1c8af001eb53a85/images/9255e6e2a5a85af603b9.jpg?v=2020-11-16T16:04:45.941Z" width="320px" max-width="100%" />
				</Box>
				<Image src="https://uploads.quarkly.io/5fb296ddb1c8af001eb53a85/images/9255e6e2a5a85af603b9.jpg?v=2020-11-16T16:04:45.941Z" width="320px" max-width="100%" />
				<Box padding="10px">
					<Image src="https://uploads.quarkly.io/5fb296ddb1c8af001eb53a85/images/9255e6e2a5a85af603b9.jpg?v=2020-11-16T16:04:45.941Z" width="320px" max-width="100%" />
				</Box>
			</Box>
		</Section>
		<Section
			background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1510125594188-5afc74c8cc43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80) center/cover"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
		>
			<Stack>
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
						Excellence in everything
					</Text>
					<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
						Striving for perfection in everything we do. Unparalleled service for everyone.
					</Text>
				</StackItem>
			</Stack>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					Who we are
				</Text>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0">
			<Menu
				display="flex"
				justify-content="center"
				font="--lead"
				font-weight="700"
				margin="-6px 0 16px"
				md-flex-direction="column"
				md-align-items="center"
			>
				<Override slot="link" text-decoration="none" color="--light" padding="6px 12px" />
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px 0px" />
				<Override slot="link-404">
					DEVELOPER
				</Override>
				<Override slot="link-index">
					Le Huu Truong
				</Override>
			</Menu>
			<Link
				href="mailto:hello@company.com"
				text-decoration-line="none"
				variant="--base"
				color="--grey"
				hover-color="--primary"
			>
				truonghuu478@gmail.com
			</Link>
			<SocialMedia
				facebook="https://www.facebook.com/quarklyapp/"
				twitter="https://twitter.com/quarklyapp"
				youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
				vkontakte="https://vk.com/quarklyapp"
				telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
			>
				<Override
					slot="link"
					border-radius="50%"
					color="--grey"
					hover-color="--light"
					background="transparent"
					hover-background="transparent"
					margin="0 8px"
				/>
			</SocialMedia>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});
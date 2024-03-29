import styled from "styled-components";

import { ContainerSpaceBetween } from "@app/styles/common.style";
import { LARGE, MEDIUM, SMALL, X_LARGE } from "@app/const";

export const P = styled.p`
	font-size: 50px;
	font-weight: 400;

	@media (max-width: ${MEDIUM}px) {
		font-size: 70px;
	}
`;

export const GradientSpan = styled.span`
	font-size: 50px;
	font-weight: 700;
	background: -webkit-linear-gradient(100deg, #bc1142, #9a11bc);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	@media (max-width: ${MEDIUM}px) {
		font-size: 70px;
	}
`;

export const ContainerTop = styled(ContainerSpaceBetween)`
	padding-top: 6.5vh;
	padding-left: 7.5vw;
	padding-right: 7.5vw;

	@media (max-width: ${MEDIUM}px) {
		flex-direction: column;
		align-content: space-evenly;
		flex-wrap: wrap;
		padding: 0;
		padding-top: 1rem;
		height: 27rem;
	}
`;

export const ContainerLines = styled.div`
	margin-top: 3rem;
	margin-bottom: 1.5rem;
`;

export const ContainerCategories = styled.div`
	display: grid;
	gap: 4rem;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: auto;

	@media (max-width: ${X_LARGE}px) {
		gap: 1rem;
	}

	@media (max-width: ${LARGE}px) {
		grid-template-columns: 1fr 1fr;
		column-gap: 2rem;
		row-gap: 1rem;
	}

	@media (max-width: ${SMALL}px) {
		grid-template-columns: 1fr;
	}
`;

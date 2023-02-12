import styled from "styled-components";
import { ISvg } from "@app/types/common";

const SVG = styled.svg<ISvg>`
	width: ${props => props.initial.width}px;
	height: ${props => props.initial.height}px;
	display: block;

	${props =>
		props.breakpoints !== undefined ?
			Object.keys(props.breakpoints).map((key: string) => {
				return props.breakpoints !== undefined ?
					`@media(max-width: ${key}px) { width: ${props.breakpoints[Number(key)].width}px;  height: ${
						props.breakpoints[Number(key)].height
						  }px;}` :
					"";
			  }) :
			""}
`;

export const XMark = ({ initial, breakpoints }: ISvg): JSX.Element => {
	return (
		<SVG initial={initial} breakpoints={breakpoints} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M14.7288 12.025L22.979 3.79358C23.3403 3.43227 23.5433 2.94224 23.5433 2.43127C23.5433 1.9203 23.3403 1.43027 22.979 1.06896C22.6178 0.70765 22.1277 0.504669 21.6168 0.504669C21.1059 0.504669 20.6159 0.70765 20.2546 1.06896L12.0235 9.31958L3.79251 1.06896C3.43122 0.70765 2.94121 0.504669 2.43027 0.504669C1.91933 0.504669 1.42931 0.70765 1.06802 1.06896C0.706733 1.43027 0.503763 1.9203 0.503763 2.43127C0.503763 2.94224 0.706733 3.43227 1.06802 3.79358L9.31823 12.025L1.06802 20.2565C0.88819 20.4348 0.745454 20.647 0.648046 20.8809C0.550639 21.1147 0.500488 21.3655 0.500488 21.6188C0.500488 21.8721 0.550639 22.1229 0.648046 22.3567C0.745454 22.5905 0.88819 22.8027 1.06802 22.9811C1.24639 23.1609 1.45859 23.3037 1.6924 23.4011C1.9262 23.4985 2.17698 23.5486 2.43027 23.5486C2.68355 23.5486 2.93433 23.4985 3.16814 23.4011C3.40194 23.3037 3.61415 23.1609 3.79251 22.9811L12.0235 14.7305L20.2546 22.9811C20.4329 23.1609 20.6451 23.3037 20.8789 23.4011C21.1127 23.4985 21.3635 23.5486 21.6168 23.5486C21.8701 23.5486 22.1209 23.4985 22.3547 23.4011C22.5885 23.3037 22.8007 23.1609 22.979 22.9811C23.1589 22.8027 23.3016 22.5905 23.399 22.3567C23.4964 22.1229 23.5466 21.8721 23.5466 21.6188C23.5466 21.3655 23.4964 21.1147 23.399 20.8809C23.3016 20.647 23.1589 20.4348 22.979 20.2565L14.7288 12.025Z"
				fill="#989898"
			/>
		</SVG>
	);
};

export const CheckMark = ({ initial, breakpoints }: ISvg): JSX.Element => {
	return (
		<SVG initial={initial} breakpoints={breakpoints} viewBox="0 0 197 197" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M98.5002 0.583496C79.1341 0.583496 60.2029 6.32621 44.1006 17.0854C27.9983 27.8447 15.4481 43.1371 8.037 61.0291C0.625922 78.921 -1.31315 98.6088 2.46498 117.603C6.24312 136.597 15.5688 154.044 29.2627 167.738C42.9566 181.432 60.4037 190.757 79.3976 194.535C98.3916 198.314 118.079 196.374 135.971 188.963C153.863 181.552 169.156 169.002 179.915 152.9C190.674 136.797 196.417 117.866 196.417 98.5002C196.417 85.6416 193.884 72.9089 188.963 61.0291C184.043 49.1493 176.83 38.355 167.738 29.2626C158.645 20.1702 147.851 12.9577 135.971 8.03696C124.092 3.11619 111.359 0.583496 98.5002 0.583496ZM140.604 75.0981L95.8565 133.848C94.9443 135.033 93.7729 135.993 92.432 136.655C91.0911 137.317 89.6164 137.663 88.121 137.667C86.6338 137.675 85.1642 137.344 83.8239 136.699C82.4836 136.055 81.3077 135.113 80.3856 133.946L56.494 103.494C55.7032 102.478 55.1202 101.316 54.7783 100.075C54.4364 98.8342 54.3424 97.5379 54.5015 96.2604C54.6606 94.9829 55.0698 93.7493 55.7057 92.6299C56.3416 91.5106 57.1917 90.5274 58.2075 89.7366C60.2591 88.1395 62.861 87.4228 65.441 87.7442C66.7185 87.9033 67.9522 88.3125 69.0715 88.9483C70.1908 89.5842 71.174 90.4343 71.9648 91.4502L87.9252 111.817L124.938 62.8585C125.722 61.8298 126.701 60.9657 127.82 60.3155C128.938 59.6653 130.174 59.2417 131.456 59.0689C132.738 58.8962 134.041 58.9776 135.292 59.3086C136.542 59.6396 137.715 60.2137 138.744 60.9981C139.773 61.7825 140.637 62.7618 141.287 63.8801C141.937 64.9984 142.361 66.2339 142.534 67.5159C142.706 68.7979 142.625 70.1014 142.294 71.352C141.963 72.6025 141.389 73.7756 140.604 74.8043V75.0981Z"
				fill="#30C718"
			/>
		</SVG>
	);
};

export const LeftArrow = ({ initial, breakpoints }: ISvg): JSX.Element => {
	return (
		<SVG initial={initial} breakpoints={breakpoints} viewBox="0 0 15 29" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M11.8854 28.037C11.595 28.038 11.3081 27.9739 11.0457 27.8494C10.7834 27.7249 10.5522 27.5432 10.3693 27.3177L0.980763 15.6527C0.694867 15.3048 0.538574 14.8684 0.538574 14.4181C0.538574 13.9678 0.694867 13.5314 0.980763 13.1836L10.6997 1.51856C11.0297 1.12153 11.5038 0.871848 12.0178 0.82445C12.5317 0.777052 13.0435 0.935816 13.4405 1.26582C13.8374 1.59582 14.087 2.07002 14.1344 2.58411C14.1818 3.0982 14.0231 3.61006 13.6932 4.00709L5.00441 14.4278L13.4016 24.8486C13.6393 25.1339 13.7903 25.4814 13.8367 25.85C13.8831 26.2185 13.823 26.5926 13.6635 26.928C13.504 27.2634 13.2518 27.5461 12.9367 27.7427C12.6216 27.9392 12.2568 28.0413 11.8854 28.037V28.037Z"
				fill="#231F20"
			/>
		</SVG>
	);
};

export const RightArrow = ({ initial, breakpoints }: ISvg): JSX.Element => {
	return (
		<SVG initial={initial} breakpoints={breakpoints} viewBox="0 0 30 58" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M4.99984 57C4.06523 57.0018 3.15949 56.6763 2.43984 56.08C2.0348 55.7442 1.7 55.3318 1.45459 54.8664C1.20918 54.401 1.058 53.8918 1.00969 53.3679C0.961388 52.844 1.01692 52.3157 1.17309 51.8133C1.32927 51.3109 1.58303 50.8442 1.91984 50.44L19.8398 29L2.55984 7.52001C2.22758 7.11086 1.97945 6.64007 1.82972 6.13471C1.67999 5.62936 1.63162 5.09939 1.68738 4.57528C1.74313 4.05116 1.90192 3.54324 2.15462 3.08069C2.40731 2.61814 2.74893 2.2101 3.15984 1.88001C3.5737 1.51586 4.05837 1.24119 4.58341 1.07323C5.10846 0.905278 5.66256 0.847663 6.21094 0.904002C6.75931 0.960342 7.29012 1.12942 7.77004 1.40063C8.24997 1.67184 8.66866 2.03932 8.99984 2.48001L28.3198 26.48C28.9082 27.1957 29.2298 28.0935 29.2298 29.02C29.2298 29.9465 28.9082 30.8443 28.3198 31.56L8.31984 55.56C7.91857 56.0441 7.40883 56.4267 6.832 56.6769C6.25516 56.9271 5.62746 57.0378 4.99984 57Z"
				fill="#231F20"
			/>
		</SVG>
	);
};

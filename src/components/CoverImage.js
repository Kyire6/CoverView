import React from "react";
import "./CoverImage.css";
import "../assets/css/patterns.css";
import ModernTheme from "./Themes/ModernTheme";
import BasicTheme from "./Themes/BasicTheme";
import OutlineTheme from "./Themes/OutlineTheme";

const CoverImage = (props) => {
	// hexToRgbA(hex, opacity) {
	// 	var c;
	// 	if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
	// 		c = hex.substring(1).split("");
	// 		if (c.length === 3) {
	// 			c = [c[0], c[0], c[1], c[1], c[2], c[2]];
	// 		}
	// 		c = "0x" + c.join("");
	// 		return "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + `,${opacity})`;
	// 	}
	// 	throw new Error("Bad Hex");
	// }

	const { theme } = props;

	const selectTheme = (theme) => {
		switch (theme) {
			case 'basic': return <BasicTheme config={props} />
			case 'modern': return <ModernTheme config={props} />
			case 'outline': return <OutlineTheme config={props} />
			default: return <BasicTheme config={props} />
		}
	}


	return (
		<div>
			{selectTheme(theme)}		</div>
	);




}

export default CoverImage;

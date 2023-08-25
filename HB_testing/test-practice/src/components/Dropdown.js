import React from "react";

export const Dropdown = (props) => {
  return (
    <div>
      {props.dropdownList.map(() => {
        return <li>Demo</li>;
      })}
    </div>
  );
};

// Position a dropdown using fixed and calculating its top and left value using its parent using ref
// const count = itemInListId.length;
// 	const dropdownRef = useRef<HTMLDivElement>(null);
// 	const dropdown = dropdownRef.current;
// 	const handleClick = (event: any): void => {
// 		console.log("clicking");

// 		console.log(dropdown);
// 		if (!dropdown) return;

// 		const dropdownWidth = dropdown.offsetWidth;
// 		const dropdownHeight = dropdown.offsetHeight;

// 		const clickX = event.clientX;
// 		const clickY = event.clientY;

// 		const windowWidth = window.innerWidth;
// 		const windowHeight = window.innerHeight;

// 		// Calculate the left position
// 		let left = clickX;
// 		if (clickX + dropdownWidth > windowWidth) {
// 			left = windowWidth - dropdownWidth;
// 		}
// 		// Calculate the top position
// 		let top = clickY;
// 		if (clickY + dropdownHeight > windowHeight) {
// 			top = windowHeight - dropdownHeight;
// 		}
// 		console.log(left);
// 		console.log(top);
// 		// dropdown.style.position = "fixed";
// 		// dropdown.style.left = `${left}px`;
// 		// dropdown.style.top = `${top}px`;
// 		// setStyle({
// 		// 	position: "fixed",
// 		// 	// left: left,
// 		// 	top: top,
// 		// });
// 	};

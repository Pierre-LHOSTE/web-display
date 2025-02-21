import { useEffect, useState } from "react";
import "./flip-clock-unit.scss";

const ANIMATION_DURATION = 0.5 * 1000;

export default function FlipClockUnit({ value }: { value: number | string }) {
	const newNumber = value;
	const [oldNumber, setOldNumber] = useState(value);
	const [isFlipping, setIsFlipping] = useState(true);
	const [middleFlipped, setMiddleFlipped] = useState(false);

	useEffect(() => {
		setMiddleFlipped(false);
		setIsFlipping(true);

		const middleTimeout = setTimeout(() => {
			setMiddleFlipped(true);
		}, ANIMATION_DURATION / 2);

		const fullTimeout = setTimeout(() => {
			setMiddleFlipped(false);
			setIsFlipping(false);
			setOldNumber(newNumber);
		}, ANIMATION_DURATION);

		return () => {
			clearTimeout(middleTimeout);
			clearTimeout(fullTimeout);
		};
	}, [value]);

	return (
		<div className="flip-clock-unit">
			<div className={`panels${isFlipping ? " flipping" : ""}`}>
				<div className="top">
					<span>{newNumber}</span>
				</div>
				<div className="bottom">
					<span>{oldNumber}</span>
				</div>
				<div className="flipper">
					<span className={middleFlipped ? "rotate" : ""}>
						{middleFlipped ? newNumber : oldNumber}
					</span>
				</div>
			</div>
			<div className="current">
				<span>{newNumber}</span>
			</div>
		</div>
	);
}

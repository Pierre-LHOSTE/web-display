import { useEffect, useState } from "react";
import "./flip-clock.scss";
import FlipClockUnit from "./components/flip-clock-unit/FlipClockUnit";

export default function FlipClock() {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date());
		}, 250);

		return () => clearInterval(interval);
	}, []);

	const hours = time
		.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })
		.split(":")[0];
	const minutes = time
		.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })
		.split(":")[1];
	const dayName =
		time
			.toLocaleDateString("fr-FR", { weekday: "long" })
			.charAt(0)
			.toUpperCase() +
		time.toLocaleDateString("fr-FR", { weekday: "long" }).slice(1);
	const day = String(time.getDate()).padStart(2, "0");
	const monthName = time.toLocaleDateString("fr-FR", { month: "short" });

	return (
		<div id="flip-clock">
			<div id="time">
				<FlipClockUnit value={hours} />
				<FlipClockUnit value={minutes} />
			</div>
			<div id="day-name">
				<FlipClockUnit value={dayName} />
			</div>
			<div id="day-full">
				<FlipClockUnit value={day} />
				<FlipClockUnit value={monthName} />
			</div>
		</div>
	);
}

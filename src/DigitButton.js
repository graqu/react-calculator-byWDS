import { ACTIONS } from './App';

export default function DigitButton({ dispath, digit }) {
	return (
		<button
			onClick={() => dispath({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
		>
			{digit}
		</button>
	);
}

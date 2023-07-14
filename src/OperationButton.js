import { ACTIONS } from "./App"

export default function OperationButton({ dispath, operation }){
    return (
		<button
			onClick={() => dispath({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}
		>
			{operation}
		</button>
	);
}
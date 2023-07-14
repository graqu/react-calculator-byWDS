import React from 'react';
import { useReducer } from 'react';
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';
import './styles.css';

export const ACTIONS = {
	ADD_DIGIT: 'add-digit',
	CHOOSE_OPERATION: 'choose-operation',
	CLEAR: 'clear',
	DELETE_DIGIT: 'delete-digit',
	EVALUATE: 'evaluate',
};

function reducer(state, { type, payload }) {
	switch (type) {
		case ACTIONS.ADD_DIGIT:
			if (payload.digit === '0' && state.currentOperand === '0') return state;
			if (payload.digit === '.' && state.currentOperand.includes('.')) return state;
			return {
				...state,
				currentOperand: `${state.currentOperand || ''}${payload.digit}`,
			};
		case ACTIONS.CHOOSE_OPERATION:
			return {
				...state,
				currentOperand: `${state.currentOperand || ''}${payload.operation}`,
			};
	}
}

function App() {
	const [{ currentOperand, previousOperand, operation }, dispath] = useReducer(
		reducer,
		{}
	);

	return (
		<div className='calculator-grid'>
			<div className='output'>
				<div className='previous-operand'>
					{previousOperand}
					{operation}
				</div>
				<div className='current-operand'>{currentOperand}</div>
			</div>
			<button className='span-two'>AC</button>
			<button>DEL</button>

			<OperationButton operation='÷' dispath={dispath} />
			<DigitButton digit='1' dispath={dispath} />
			<DigitButton digit='2' dispath={dispath} />
			<DigitButton digit='3' dispath={dispath} />
			<OperationButton operation='*' dispath={dispath} />
			<DigitButton digit='4' dispath={dispath} />
			<DigitButton digit='5' dispath={dispath} />
			<DigitButton digit='6' dispath={dispath} />
			<OperationButton operation='+' dispath={dispath} />
			<DigitButton digit='7' dispath={dispath} />
			<DigitButton digit='8' dispath={dispath} />
			<DigitButton digit='9' dispath={dispath} />
			<OperationButton operation='-' dispath={dispath} />
			<DigitButton digit='.' dispath={dispath} />
			<DigitButton digit='0' dispath={dispath} />
			<button className='span-two'>=</button>
		</div>
	);
}

export default App;

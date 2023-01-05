import React, { useState } from 'react';

const generarSignoAleatorio = (): string => {
	const signos = ['+', '-', '*', '/'];
	return signos[Math.floor(Math.random() * signos.length)];
}

export const Calculator = () => {
	const signoInicial = generarSignoAleatorio();
	const [signo, setSigno] = useState<string>(signoInicial);
	const [operacion, setOperacion] = useState<string>("");
	const [operations_string, setOperationsString] = useState<string>("");
	const [result, setResult] = useState<number>(0);

	const generarSigno = (): void => {
		setSigno(generarSignoAleatorio);
	}

	const generarOperacion = () => {
		generarSigno();
		const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		const numero1 = Math.floor(Math.random() * numeros.length);
		const numero2 = Math.floor(Math.random() * numeros.length);
		const operation = `${numero1}${signo}${numero2}`;
		setOperacion(operation);
		setOperationsString(prevOperationsString => `${prevOperationsString} ${operation}`);
		setResult(prevResult => performOperation(signo, prevResult, numero2));
	};

	const performOperation = (operation: string, result: number, operand: number): number => {
		switch (operation) {
			case "+":
				return result + operand;
			case "-":
				return result - operand;
			case "*":
				return result * operand;
			case "/":
				return result / operand;
			default:
				throw new Error(`Operación "${operation}" no soportada`);
		}
	}

	return (
		<>
			<button onClick={generarOperacion}>Generar operación</button>
			<p>{operacion}</p>
			<p>{operations_string}</p>
			<p>{result}</p>
		</>
	);
}

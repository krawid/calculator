import { useState } from 'react'

export const Calculator = () => {
	const [signo, setSigno] = useState<string>("");
	const generarSigno = (): string => {
		const signos = ["+", "-", "*", "/"];
		const indiceAleatorio = Math.floor(Math.random() * signos.length);
		return signos[indiceAleatorio];
	}
	return (
		<>
			<button type='button' onClick={(e) => {
				console.log(e);
				setSigno(generarSigno)
			}
			}
			>Generar signo</button>
			<p>{signo}</p>
		</>
	)
}
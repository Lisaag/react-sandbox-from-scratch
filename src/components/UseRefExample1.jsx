import { useRef } from 'react'

function UseRefExample1() {
	const inputRef = useRef()
	const paraRef = useRef()

	const onSubmit = (e) => {
		e.preventDefault()
		inputRef.current.value = 'JMDR'
		inputRef.current.style.backgroundColor = 'green'
		paraRef.current.innerText = 'Goodbye'
	}

	return (
		<div>
			<form onSubmit={onSubmit}>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					ref={inputRef}
					id='name'
					className='form-control mb-2'
				></input>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
				{/* <p onClick={() => inputRef.current.focus()} ref={paraRef}></p> */}
				<p
					onClick={() =>
						(inputRef.current.value = paraRef.current.innerText)
					}
					ref={paraRef}
				></p>
			</form>
		</div>
	)
}

export default UseRefExample1

import { useCallback, useEffect, useState } from 'react'
import styles from './styles.module.css'
import { Button, TextInput, OptIns } from '../components'
import Slider from '../components/Slider'

const initialOptions = [
	{
		title: 'Uppercase',
		description: 'Include uppercase characters in your password',
		value: true
	},
	{
		title: 'Lowercase',
		description: 'Include lowercase characters in your password',
		value: true
	},
	{
		title: 'Numbers',
		description: 'Include numbers characters in your password',
		value: false
	},
	{
		title: 'Special Characters',
		description: 'Include special characters in your password',
		value: false
	}
]

export default function PasswordGenerator() {
	const [options, setOptions] = useState(initialOptions)
	const [passwordLength, setPasswordLength] = useState(10)

	useEffect(() => {
		console.log('generate password')
	}, [options])

	const updateOptionValues = useCallback(
		(arrIndex, key, newValue) => {
			const updatedOptions = options.map((option, index) => {
				if (arrIndex === index) {
					return { ...option, [key]: newValue }
				}
				return option
			})
			setOptions(updatedOptions)
		},
		[options]
	)

	return (
		<div className={styles.generatorWrapper}>
			<h2>Password Generator</h2>
			<TextInput />
			<Slider {...{ passwordLength, setPasswordLength }} title='Select password length'/>
			<OptIns title={'Password generation opt-ins'} {...{ options, updateOptionValues }} />
			<Button>Generate Password</Button>
		</div>
	)
}

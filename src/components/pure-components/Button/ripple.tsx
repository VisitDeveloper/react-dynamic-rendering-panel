/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { CSSProperties, useEffect, useState } from 'react'

interface IPropsRippleNew {
	color?: string
	onClick?: (ev: React.MouseEvent<HTMLDivElement>) => void
	className?: string
	children: React.ReactNode | JSX.Element | React.ReactElement
	duration?: number
}

const boxStyle: CSSProperties = {
	position: 'relative',
	display: 'inline-flex',
	overflow: 'hidden',
	borderRadius:'50px'
}

const Ripple: React.FC<IPropsRippleNew> = ({
	color = '#fff',
	onClick = () => {},
	className = '',
	children,
	duration = 300,
}) => {
	const [timber, setTimer] = useState<any>()
	const [rippleStyle, setRippleStyle] = useState<CSSProperties>({
		position: 'absolute',
		borderRadius: '50%',
		opacity: 0,
		width: 35,
		height: 35,
		transform: 'translate(-50%, -50%)',
		pointerEvents: 'none',
	})

	const onClickAc = (ev: React.MouseEvent<HTMLDivElement>) => {
		// ev.stopPropagation()


		const rect = ev.currentTarget.getBoundingClientRect()

		const left: number = ev.pageX - (rect.left + window.scrollX)
		const top: number = ev.pageY - (rect.top + window.scrollY)
		const size: number = Math.max(rect.width, rect.height)

		setRippleStyle({
			...rippleStyle,
			position: 'absolute',
			borderRadius: '50%',
			width: 35,
			height: 35,
			pointerEvents: 'none',
			left: left,
			top: top,
			opacity: 1,
			transform: 'translate(-50%, -50%)',
			transition: 'initial',
			backgroundColor: color ? color : '#888',
		})

		const timer = setTimeout(() => {
			setRippleStyle({
				...rippleStyle,
				position: 'absolute',
				borderRadius: '50%',
				width: 35,
				height: 35,
				pointerEvents: 'none',
				opacity: 0,
				left: left,
				top: top,
				transform: `scale(${size / 9})`,
				transition: `all ${duration}ms`,
			})
		}, 10)

		setTimer(timer)

		if (onClick) onClick(ev)
	}

	useEffect(() => {
		return () => timber
	}, [timber])

	return (
		<div
			color={color}
			className={`react-ripples ${className}`.trim()}
			style={boxStyle}
			onClick={onClickAc}
		>
			{children}
			<s style={rippleStyle} />
		</div>
	)
}
export default Ripple;


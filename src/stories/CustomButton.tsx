import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = createStyles({
	button: {
		width: 'fit-content',
		height: 42,
		borderRadius: 5,
		background: '#fff',
		boxSizing: 'border-box',
		border: '1.5px solid rgba(227, 229, 235, 1)',
		fontFamily: 'robotoMedium',
		fontSize: 14,
		lineHeight: '16px',
		textTransform: 'capitalize',
		boxShadow: 'rgba(0, 0, 0, 0.1608) !important',
		color: '#636675',
		'&:hover': {
			background: '#F8F8F8'
		}
	},
	buttonDefaultDisabled: {
		border: '1.5px solid #E3E5EB',
		color: '#CBCCDE'
	},
	buttonPrimary: {
		color: '#fff',
		border: 'none',
		background: '#0075E8',
		'&:hover': {
			background: '#0668C9'
		}
	},
	buttonPrimaryDisabled: {
		color: '#fff !important',
		border: 'none',
		background: '#B5B7C8'
	},
	buttonSecondary: {
		color: '#fff',
		border: 'none',
		background: '#ED1A3B',
		'&:hover': {
			background: '#D80E2D'
		}
	},
	colorTertiary: {
		backgroundColor: '#ED1A3B',
		color: 'white',
		'&:hover': {
			background: '#F8F8F8'
		}
	},
	buttonTertiary: {
		background: '#F79F1F',
		color: '#fff',
		border: 'none',
		'&:hover': {
			backgroundColor: '#F79F1F'
		}
	},
	buttonLightPrimary: {
		backgroundColor: '#E4F2FF',
		color: '#0075E8',
		border: 'none',
		'&:hover': {
			backgroundColor: '#d5e5f4',
			boxShadow: 'none'
		}
	},
	small: {
		height: 32,
		width: 'auto',
		padding: '0 14px',
		fontSize: 11
	},
	medium: {
		height: 40,
		width: 'auto',
		minWidth: 137,
		padding: '0 14px'
	},
	large: {
		height: 42,
		minWidth: 185,
		boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.160784)'
	},
	icon: {
		display: 'flex',
		marginRight: 7,
		alignItems: 'center'
	},
	iconSmall: {
		height: 18
	},
	iconMedium: {
		height: 20
	},
	iconLarge: {
		height: 22
	},
	rounded: {
		borderRadius: 24
	},
	link: {
		backgroundColor: 'transparent',
		color: '#62B1FF',
		border: 'none',
		height: 'unset',
		padding: '0 5px',
		'&:hover': {
			backgroundColor: 'transparent',
			boxShadow: 'none'
		}
	},
});

interface CustomButtonType {
	label: string,
	iconImg: Element,
	size: string,
	type: string,
	show: boolean,
	rounded: boolean,
	disabled: boolean,
	buttonType: 'button' | 'submit',
	[x: string | number | symbol]: unknown,
}

const CustomButton: React.FC<CustomButtonType & WithStyles<typeof styles>> = ({
	label = 'Button Name',
	iconImg,
	size,
	type = 'default',
	classes,
	show = true,
	rounded = false,
	disabled = false,
	buttonType='button',
	variant,
	...rest
}): JSX.Element | null => {
	const getIconClass = (size: string) => {
		switch (size) {
		case 'small': return classes.iconSmall;
		case 'medium': return classes.iconMedium;
		case 'large': return classes.iconLarge;
		default: return '';
		}
	};

	const getButtonCategoryClass = (type, disabled) => {
		switch (type) {
		case 'primary': return !disabled ? classes.buttonPrimary : classes.buttonPrimaryDisabled;
		case 'secondary': return !disabled ? classes.buttonSecondary : classes.buttonPrimaryDisabled;
		case 'tertiary': return classes.colorTertiary;
		case 'lightPrimary' : return classes.buttonLightPrimary;
		default: return !disabled ? '' : classes.buttonDefaultDisabled;
		}
	};

	const getButtonSizeClass = (size: string) => {
		switch (size) {
		case 'small': return classes.small;
		case 'medium': return classes.medium;
		case 'large': return classes.large;
		default: return '';
		}
	};

	const getButtonVarientClass = (variant) => {
		switch (variant) {
		case 'link': return classes.link;
		default: return '';
		}
	};

	return (
		show ? <Button
			color='primary'
			classes={{
				root: classNames(classes.button,
					getButtonCategoryClass(type, disabled),
					getButtonSizeClass(size),
					getButtonVarientClass(variant),
					rounded && classes.rounded)
			}}
			disabled = {disabled}
			type={buttonType}
			{...rest}
		>
			{iconImg &&
                <span
					className={classNames(classes.icon, getIconClass(size))}>
                	{iconImg}
                </span>}
			{label}
		</Button>
			: null
	);
};

export default withStyles(styles)(CustomButton);

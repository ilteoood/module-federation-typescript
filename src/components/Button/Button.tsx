interface ButtonProps {
    onClick: () => void
}

const Button = ({onClick}: ButtonProps) => <button onClick={onClick} />

export default Button
interface AnotherButtonProps {
    onClick: () => void
}

const AnotherButton = ({onClick}: AnotherButtonProps) => <button onClick={onClick} />

export default AnotherButton
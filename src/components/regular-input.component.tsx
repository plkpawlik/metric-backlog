export default function (props: { action(): void; placeholder: string; type: string }) {
	// component logic

	// component layout
	return (
		<input
			className="backdrop-blur-lg bg-gray-400 bg-opacity-20 flex-1 px-4 py-2 rounded-md"
			placeholder={props.placeholder}
			type={props.type}
		/>
	);
}
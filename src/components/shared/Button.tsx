import * as React from "react";

interface IProps {
	variant: "primary" | "white" | "secondary" ;
	className?: string;
	onClick?: () => void;
	children: React.ReactNode;
	type?: "button" | "submit" | "reset";
}

const Button = ({
	variant,
	className = "",
	onClick,
	type = "button",
	children,
}: IProps) => {
	return (
		<>
			{variant === "primary" && (
				<button
					type={type}
					className={`${className} text-white font-normal py-2 px-8 bg-primary hover:bg-complementary hover:text-white sm:w-auto mx-auto sm:min-w-[220px]`}
					onClick={onClick}
				>
					{children}
				</button>
			)}
			{variant === "white" && (
				<button
					type={type}
					className={`${className} text-white font-normal py-2 px-8 bg-white text-primary border-primary border hover:bg-primary hover:text-white sm:w-auto mx-auto sm:min-w-[220px]`}
					onClick={onClick}
				>
					{children}
				</button>
			)}
			{variant === "secondary" && (
				<button
					type={type}
					className={`${className} text-white font-normal py-2 px-8 border bg-complementary text-white hover:bg-white hover:text-complementary hover:border-complementary sm:w-auto mx-auto sm:min-w-[220px]`}
					onClick={onClick}
				>
					{children}
				</button>
			)}
		</>
	);
};

export default Button;

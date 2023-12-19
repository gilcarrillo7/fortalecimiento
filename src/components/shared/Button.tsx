import * as React from "react";

interface IProps {
	variant: "primary" | "white" | "secondary"|"complementary" ;
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
					className={`${className} text-white font-normal py-2 px-8 bg-primary border hover:bg-complementary hover:text-white w-full sm:w-auto mx-auto sm:min-w-[220px]`}
					onClick={onClick}
				>
					{children}
				</button>
			)}
			{variant === "white" && (
				<button
					type={type}
					className={`${className} text-primary font-normal py-2 px-8 bg-white text-primary border-primary border hover:bg-primary hover:text-white w-full sm:w-auto mx-auto sm:min-w-[220px]`}
					onClick={onClick}
				>
					{children}
				</button>
			)}
			{variant === "secondary" && (
				<button
					type={type}
					className={`${className} text-white font-normal py-2 px-8 border bg-complementary text-white hover:bg-white hover:text-complementary hover:border-complementary w-full sm:w-auto mx-auto sm:min-w-[220px]`}
					onClick={onClick}
				>
					{children}
				</button>
			)}
			{variant === "complementary" && (
				<button
					type={type}
					className={`${className} text-primary font-normal py-2 px-8 bg-complementary border border-primary hover:bg-primary hover:text-white w-full sm:w-auto mx-auto sm:min-w-[220px]`}
					onClick={onClick}
				>
					{children}
				</button>
			)}
		</>
	);
};

export default Button;

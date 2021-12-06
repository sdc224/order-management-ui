import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import React from "react";
import clsx from "clsx";
import useCardsStyles from "./cards.style";
import { Chip } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import CustomIconButton from "./../Buttons/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import useCartSelector from "../../../data/selectors/cartSelector";

export interface OfferCardProps {
	id: string;
	percent: number;
	name: string;
	rating?: number;
	currencySymbol?: string;
	price: number;
	crossedPrice: number;
	image: string;
}

const OfferCard: React.FC<OfferCardProps> = ({
	id,
	percent,
	name,
	rating,
	currencySymbol = "₹",
	price,
	crossedPrice,
	image
}) => {
	const classes = useCardsStyles();
	const [count, setCount] = React.useState(0);

	const { increment, decrement } = useCartSelector();

	const handleIncrement = () => {
		setCount(count + 1);
		increment({ cartProduct: { id, name, quantity: 1 }, value: 1 });
	};

	const handleDecrement = () => {
		setCount(count - 1);
		decrement({ cartProduct: { id, name, quantity: 1 }, value: 1 });
	};

	return (
		<Box paddingBottom={8}>
			<Paper
				className={clsx(classes.flexColumn, classes.offerCardPaper)}
				elevation={1}
			>
				<Box
					position="relative"
					display="inline-block"
					textAlign="center"
				>
					<Chip
						size="small"
						color="primary"
						className={classes.offerCardChip}
						label={`${percent}% off`}
					/>
					<span className={classes.imgSpan}>
						<span
							className={clsx(
								classes.imgSpan,
								classes.imgSpanInside
							)}
						/>
						<img
							src={image}
							alt="Bla Bla"
							className={classes.img}
						/>
					</span>
				</Box>
				<Box display="flex" padding="1rem">
					<Box
						display="flex"
						flexDirection="column"
						flex="1 1 0px"
						minWidth={0}
						marginRight={8}
					>
						<Typography noWrap className={classes.offerCardTitle}>
							{name}
						</Typography>
						{rating && (
							<Rating
								readOnly
								size="medium"
								role="img"
								value={rating}
							/>
						)}
						<Box display="flex" alignItems="center" marginTop={4}>
							<Typography
								className={classes.offerCardPrice}
							>{`${currencySymbol}${price.toFixed(
								2
							)}`}</Typography>
							<Typography
								className={clsx(
									classes.offerCardPrice,
									classes.crossedPrice
								)}
							>{`${currencySymbol}${crossedPrice.toFixed(
								2
							)}`}</Typography>
						</Box>
					</Box>
					<Box
						display="flex"
						flexDirection="column-reverse"
						alignItems="center"
						justifyContent="flex-start"
						width={30}
					>
						<CustomIconButton
							icon={<AddIcon />}
							onClick={handleIncrement}
						/>
						{count > 0 && (
							<>
								<Typography>{count}</Typography>
								<CustomIconButton
									icon={<RemoveIcon />}
									onClick={handleDecrement}
								/>
							</>
						)}
					</Box>
				</Box>
			</Paper>
		</Box>
	);
};

export default OfferCard;

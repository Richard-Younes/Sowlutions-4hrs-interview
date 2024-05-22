/** @format */
import { useState } from 'react';
import styles from './Item.module.css';
import Modal from './Modal';

function Item({ item, handleDragEnter, handleDragStart, index }) {
	const [showModal, setShowModal] = useState(false);

	const handleContainerClick = () => {
		setShowModal(true);
	};

	return (
		<div
			className={styles.itemContainer}
			onMouseUp={handleContainerClick}
			draggable='true'
			onDragStart={() => handleDragStart(index)}
			onDragEnter={() => handleDragEnter(index)}>
			<h2 className={styles.h2}>{item.title}</h2>
			<img
				draggable='false'
				className={styles.image}
				src={item.image}
				alt={item.title}
			/>

			<div className={styles.priceContainer}>
				<p>${item.price}</p>
				<p>⭐{item.rating.rate}</p>
			</div>
			<p>{item.rating.count} left</p>
			<Modal item={item} showModal={showModal} setShowModal={setShowModal} />
		</div>
	);
}

export default Item;

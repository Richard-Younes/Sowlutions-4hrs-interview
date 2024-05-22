/** @format */

import { useEffect, useState } from 'react';
import { url } from '../values';
import Item from './Item';
import styles from './ItemsContainer.module.css';
function ItemsContainer() {
	const [items, setItems] = useState([]);

	const [draggingItem, setDraggingItem] = useState(null);

	useEffect(() => {
		async function fetchFakeStore() {
			try {
				const response = await fetch(`${url}`);
				const data = await response.json();
				setItems(data);
			} catch (error) {
				console.error(error);
			}
		}

		fetchFakeStore();

		const sessionData = sessionStorage.getItem('items');
		if (sessionData) {
			setItems(JSON.parse(sessionData));
		}
	}, []);

	useEffect(() => {
		sessionStorage.setItem('items', JSON.stringify(items));
	}, [items]);

	function handleDragStart(index) {
		setDraggingItem(index);
	}

	function handleDragEnter(index) {
		const newItems = [...items];
		const item = newItems[draggingItem];
		newItems.splice(draggingItem, 1);
		newItems.splice(index, 0, item);
		setItems(newItems);
		setDraggingItem(index);
	}

	return (
		<div className={styles.itemsContainer}>
			{items.map((item, index) => {
				return (
					<Item
						key={item.id}
						index={index}
						item={item}
						handleDragStart={handleDragStart}
						handleDragEnter={handleDragEnter}
					/>
				);
			})}
		</div>
	);
}

export default ItemsContainer;

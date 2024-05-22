/** @format */

import styles from './Modal.module.css';
function Modal({ item, showModal, setShowModal }) {
	const openModal = () => {
		setShowModal(prev => !prev);
	};

	const closeModal = e => {
		if (e.target.className === styles.modalBackground) {
			setShowModal(false);
		}
	};

	return (
		<>
			{showModal ? (
				<div className={styles.modalBackground} onClick={closeModal}>
					<div className={styles.modal}>
						<h2>{item.title}</h2>
						<img src={item.image} alt={item.title} className={styles.image} />
						<h4>Category: {item.category}</h4>
						<p>{item.description}</p>
						<div className={styles.priceContainer}>
							<p>${item.price}</p>
							<p>⭐{item.rating.rate}</p>
						</div>
						<p>{item.rating.count} left</p>
						<button onClick={openModal}>Close</button>
					</div>
				</div>
			) : null}
		</>
	);
}

export default Modal;

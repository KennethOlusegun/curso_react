import styles from './CarDetails.module.css'

export const CarDetails = ({brand, km, color}) => {
  return (
	  <div>
		  <ul>
			  <li className={styles.car_detail}>Brand: {brand}</li>
			  <li className={styles.car_km}>Km: {km}</li>
			  <li className={styles.car_color}>Color: {color}</li>
		</ul>
	</div>
  )
}


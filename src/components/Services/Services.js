import React from 'react'
import styles from './Services.module.css'
import { services } from '../../utils/constants'

const Services = () => {
  return (
    <section className={styles.services_container}>
      <div className={styles.services_center_div}>
        <article className={styles.services_header}>
          <h3>
            custom furniture <br />
            built only for you
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas porro,
            at eligendi sunt dolorum amet tempora! Ratione voluptas quo aperiam.
          </p>
        </article>
        <div className={styles.services_cards}>
          {services.map((service) => {
            const { id, icon, title, text } = service
            return (
              <article className={styles.services_single_card} key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services

import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <section className={styles.contact_container}>
      <div className={styles.contact_center_div}>
        <h3>Join our newsletter and get 20% off</h3>
        <div className={styles.contact_content}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nam
            corrupti cum nihil dignissimos amet rerum maxime laboriosam magnam
            minima?
          </p>
          <form
            className={styles.contact_form}
            action='https://formspree.io/f/mknagwrr'
            method='POST'
          >
            <input type='email' placeholder='Enter email' name='email' />
            <button type='submit'>subscribe</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

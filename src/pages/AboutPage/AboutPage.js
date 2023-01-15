import React from 'react'
import styles from './AboutPage.module.css'
import { PageHero } from '../../components'
import aboutImg from '../../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='About' />
      <section className={styles.about_page_container}>
        <img src={aboutImg} alt='desk image' />
        <article>
          <div className={styles.title}>
            <h2>About us</h2>
            <div className={styles.underline}></div>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            rerum possimus eos saepe ullam voluptatum tempore soluta corrupti
            sapiente, recusandae assumenda harum, distinctio consequatur
            quaerat, quasi exercitationem voluptas eum dolores laboriosam qui
            beatae in? Delectus ea minus nostrum omnis iste. Iste eos assumenda
            commodi unde laudantium id itaque error ipsa!
          </p>
        </article>
      </section>
    </main>
  )
}

export default AboutPage

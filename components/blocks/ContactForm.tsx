import styles from './ContactForm.module.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ContactForm = ({ data }: { data: any }) => {
    return (
        <section className={styles.section} id="contact">
            <div className={styles.container}>
                <h2 className={styles.title}>{data.title}</h2>
                <form className={styles.form} action={`mailto:${data.email || 'contact@sebastiantitz.ch'}`} method="post" encType="text/plain">
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>Name</label>
                        <input type="text" id="name" name="name" className={styles.input} required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input type="email" id="email" name="email" className={styles.input} required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message" className={styles.label}>Nachricht</label>
                        <textarea id="message" name="message" className={styles.textarea} required></textarea>
                    </div>
                    <button type="submit" className={styles.button}>Absenden</button>
                </form>
            </div>
        </section>
    )
}

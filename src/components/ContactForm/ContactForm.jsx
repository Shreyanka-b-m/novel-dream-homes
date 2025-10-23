import styles from './ContactForm.module.css';

export default function ContactForm() {
  return (
    <div className={styles.formContainer}>
      <div className={styles.fieldGroup}>
        <label htmlFor="name" className={styles.label}>Name</label>
        <input
          type="text"
          id="name"
          placeholder="Placeholder text"
          className={styles.input}
        />
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="email" className={styles.label}>Email ID</label>
        <input
          type="email"
          id="email"
          placeholder="Placeholder text"
          className={styles.input}
        />
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="phone" className={styles.label}>Phone</label>
        <input
          type="tel"
          id="phone"
          placeholder="Placeholder text"
          className={styles.input}
        />
      </div>
    </div>
  );
}

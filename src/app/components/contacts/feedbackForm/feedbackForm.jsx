import { useForm } from 'react-hook-form';
import IconArrow from '@/app/utils/svg/arrow';
import styles from './feedbackForm.module.css';

export default function FeedbackForm() {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange' | 'onBlur',
  });

  const handleClearErr = () => {
    clearErrors();
  };

  const handleRegister = data => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(data => handleRegister(data))}
      onChange={handleClearErr}
      className={styles.feedback_form}
    >
      <label>
        <p className={styles.feedback_form_label}>* Full name:</p>
        <input
          type="text"
          required
          placeholder="John Rosie"
          className={styles.feedback_input}
          style={{ borderColor: errors?.name ? '#D28B8B' : '#97d28b' }}
          {...register('name', {
            required: 'required',
            minLength: 2,
          })}
        />
        {errors?.name && (
          <p className={styles.feedback_err_text}>Wrong Fullname</p>
        )}
      </label>

      <label>
        <p className={styles.feedback_form_label}>* E-mail:</p>
        <input
          type="email"
          required
          placeholder="johnrosie@gmail.com"
          className={styles.feedback_input}
          style={{ borderColor: errors?.email ? '#D28B8B' : '#97d28b' }}
          {...register('email', {
            required: 'required',
            minLength: 4,
            pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
          })}
        />
        {errors?.email && (
          <p className={styles.feedback_err_text}>Wrong Email</p>
        )}
      </label>

      <label>
        <p className={styles.feedback_form_label}>* Phone:</p>
        <input
          type="text"
          required
          placeholder="380961234567"
          className={styles.feedback_input}
          style={{ borderColor: errors?.phone ? '#D28B8B' : '#97d28b' }}
          {...register('phone', {
            required: 'required',
            minLength: 10,
            maxLength: 13,
          })}
        />
        {errors?.phone && (
          <p className={styles.feedback_err_text}>Wrong Phone</p>
        )}
      </label>

      <label>
        <p className={styles.feedback_form_label}>Message:</p>
        <textarea
          type="text"
          rows="6"
          placeholder="Your message"
          className={styles.feedback_input}
          {...register('message')}
        />
      </label>

      <button type="submit" className={styles.feedback_sbmt_btn}>
        Send
        <span className={styles.feedback_btn_icon}>
          <IconArrow width={16} height={16} />
        </span>
      </button>
    </form>
  );
}

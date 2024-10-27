import css from './Feedback.module.css'

const Feedback = ({ good, neutral, bad, total, postivity }) => {
    return (
        <div className={css.feedback}>
            <p className={css.title}>Good: <span className={css.value}>{ good }</span></p>
            <p className={css.title}>Neutral: <span className={css.value}>{ neutral}</span></p>
            <p className={css.title}>Bad: <span className={css.value}>{ bad }</span></p>
            <p className={css.title}>Total: <span className={css.value}>{ total}</span></p>
            <p className={css.title}>Positive: <span className={css.value}> {postivity}%</span></p>
        </div>
    )
}

export default Feedback
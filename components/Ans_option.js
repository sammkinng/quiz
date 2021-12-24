import styles from '../styles/Home.module.css'

export default function Ans_option({ value }) {
    return <div className={styles.ans} style={{
        borderRadius: "5px",
        height: "50px",
        padding: "0 1rem",
        display: 'flex',
        alignItems: 'center',
        marginTop: '2rem',
        border: "1px solid #24488655",
        backgroundColor: 'white'
    }}>
        {value}

    </div>
}
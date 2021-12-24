import Head from 'next/head'
import { Ques_statement, Ans_option, Formbutton, Side_dialog, Timer } from '../components/index'
import styles from '../styles/Home.module.css'

const questions = [
  {
    no: 1,
    statement: "This is ques 1",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  },
  {
    no: 2,
    statement: "This is ques 2",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  },
  {
    no: 3,
    statement: "The theory of relativity is presented by which scientist",
    option1: "Maxwell",
    option2: "Einstein",
    option3: "Newton",
    option4: "Gauss",
  },
  {
    no: 4,
    statement: "This is ques 1",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  },
  {
    no: 5,
    statement: "This is ques 1",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  },
  {
    no: 6,
    statement: "This is ques 1",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  },
  {
    no: 7,
    statement: "This is ques 1",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  },
  {
    no: 8,
    statement: "This is ques 1",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  },
  {
    no: 9,
    statement: "This is ques 1",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  },
  {
    no: 10,
    statement: "This is ques 1",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  }
]

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quiz</title>
        <meta name="description" content="education management software" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
          <h1>Quiz Title</h1>
          <Timer />
        </div>

        <div className={styles.fbox}>
          <div style={{
            width: "75vw",
            marginRight: "1rem",
          }}>
            <Ques_statement no={questions[2].no} statement={questions[2].statement} />
            <Ans_option value={questions[2].option1} />
            <Ans_option value={questions[2].option2} />
            <Ans_option value={questions[2].option3} />
            <Ans_option value={questions[2].option4} />
            <div style={{
              marginTop: '50px',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <Formbutton value='Prev' />
              <Formbutton value="Next" />
            </div>
          </div>
          <Side_dialog questions={questions} />
        </div>
      </main>
      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default function Ques_statement({ no, statement }) {
    return (
        <div style={{
            borderRadius: "15px",
            color: "white",
            backgroundImage: 'url("/bg.svg")',
            backgroundSize: "cover",
            backgroundRepeat: 'no-repeat',
            padding: "0.5rem 1rem",
        }}>
            <h2>Question {no}</h2>
            <p style={{ fontSize: "1.2rem", }}>
                {statement}
            </p>
        </div>
    )
}
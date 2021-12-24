export default function Timer() {
    return <div>
        <div style={{ fontWeight: 600, fontSize: '1.3rem', marginBottom: '0.5rem' }}>
            Time Left:
        </div>

        <div style={{
            border: '1px solid #244886',
            borderRadius: '5px',
            width: '454.467px',
            height: '30px'
        }}>
            <div style={{
                height: '100%',
                width: '350px',
                backgroundColor: '#244886',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                30 : 23
            </div>
        </div>
    </div>

}
export default function Circular_ques_btn({ value, color, radius }) {
    return <div style={{
        width: 2 * radius + 'px',
        height: 2 * radius + 'px',
        borderRadius: radius + 'px',
        backgroundColor: color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: color == '#f9fafc' ? 'black' : 'white',
        cursor: 'pointer'
    }}>
        {value}
    </div>
}
export default function Formbutton({ value }) {
    return <div style={{
        borderRadius: "10px",
        // border: "1px solid #24488655",
        backgroundColor: "#244886",
        color: 'white',
        width: "100px",
        height: "35px",
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '25px',
        marginRight: '25px',
        cursor: 'pointer',
    }}>
        {value}
    </div>
}
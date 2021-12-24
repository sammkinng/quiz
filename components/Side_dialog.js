import styles from '../styles/Home.module.css'
import { Circlular_ques_btn, Formbutton } from './index'

const visited_attempt_array = [
    {
        no: 1,
        visited: true,
        attempted: true
    },
    {
        no: 2,
        visited: true,
        attempted: false
    },
    {
        no: 1,
        visited: true,
        attempted: false
    },
    {
        no: 1,
        visited: false,
        attempted: false
    },
    {
        no: 1,
        visited: false,
        attempted: false
    },
    {
        no: 1,
        visited: false,
        attempted: false
    },
    {
        no: 1,
        visited: false,
        attempted: false
    },
    {
        no: 1,
        visited: false,
        attempted: false
    },
    {
        no: 1,
        visited: false,
        attempted: false
    },
    {
        no: 1,
        visited: false,
        attempted: false
    },
]
const present_ques_id = 2

const color_calculator = (id) => {
    var temp = visited_attempt_array[id]
    if (id == present_ques_id)
        return '#244886'
    else {
        if (temp.attempted == true)
            return 'green'
        else if (temp.visited == true && temp.attempted == false)
            return 'red'
        else
            return '#f9fafc'
    }
}

export default function Side_dialog({ questions }) {
    const arr = questions.slice()
    const arr1 = []
    while (arr.length) arr1.push(arr.splice(0, 4))
    return <div style={{
        width: "25vw",
        border: "1px solid #24488655",
        borderRadius: "20px",
        marginLeft: "1rem",
        padding: '1rem',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }}>
        <div style={{
            padding: '0 1rem',
            fontSize: 'x-large',
            marginBottom: '2rem',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <div>
                Section-1
            </div>

            <div style={{
                // float: 'right'
            }}>
                Need Help?
            </div>
        </div>
        <table>
            <thead>
            </thead>
            <tbody>
                {arr1.map(arr2 => {
                    return <tr key={arr2}>
                        {arr2.map(ques => {
                            return <td key={ques} style={{
                                width: "100px",
                                padding: "7.5px 20px",
                                height: '75px'
                            }}>
                                <Circlular_ques_btn value={ques.no} color={color_calculator(ques.no - 1)} radius={30} />
                            </td>
                        })}
                    </tr>
                })}
            </tbody>
            <tfoot></tfoot>
        </table>
        <div style={{ marginTop: '2rem' }}>
            <Formbutton value='Submit' />
        </div>
        <div style={{ width: '100%', marginTop: '2rem', padding: '0 1rem' }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'flex-start',
                marginTop: '1rem'
            }}>
                <Circlular_ques_btn radius={15} color="green" value={5} />
                <div style={{ width: '12px' }}></div>
                :
                <div style={{ width: '13px' }}></div>
                Attempted
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'flex-start',
                marginTop: '1rem'
            }}>
                <Circlular_ques_btn radius={15} color="red" value={5} />
                <div style={{ width: '12px' }}></div>
                :
                <div style={{ width: '13px' }}></div>
                Visited but not Attempted
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'flex-start',
                marginTop: '1rem'
            }}>
                <Circlular_ques_btn radius={15} color="#244886" value={5} />
                <div style={{ width: '12px' }}></div>
                :
                <div style={{ width: '13px' }}></div>
                Open
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'flex-start',
                marginTop: '1rem'
            }}>
                <Circlular_ques_btn radius={15} color="#f9fafc" value={5} />
                <div style={{ width: '12px' }}></div>
                :
                <div style={{ width: '13px' }}></div>
                Not Visited
            </div>
        </div>
    </div>
}
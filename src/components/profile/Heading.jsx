export default function Heading (props) {
    return (
        <div className='profile-heading'>
            <img src="./src/images/remove" alt="" />
            <h1>{props.title} </h1>
        </div>
    )
}
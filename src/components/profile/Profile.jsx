
import './Profile.css';
import Heading from './Heading'
import Detail from './Detail'
import Task from './task'
import Blogs from './blogs'
// import Images from './image'



export default function Profile() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className='profile-heading'>
                        {/* <Images /> */}
                        <Heading  title ="Lorem, ipsum."/>
                    </div>

                    <Detail owner = "shu."/>
                    <Task/>
                    <Blogs/>

                </div>
            </div>
        </div>

    )
}


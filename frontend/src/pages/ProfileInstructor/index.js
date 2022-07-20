import './index.scss'
import SidebarInstructor from '../../components/SidebarInstructor'
import InformationInstructor from '../../components/InformationInstructor'
import InstructorViewedReviews from '../../components/InstructorViewedReviews'
import Reviews from '../../components/ReviewsList/Reviews'

const ProfileInstructor = () => {
    return (
        <>
            <div className="ProfileInstructor">
                <h1>ProfileInstructor</h1>
            </div>
            <div className="ProfileInstructor__sidebar">
                <SidebarInstructor />
            </div>
            <div className="ProfileInstructor__information">
                <InformationInstructor />
            </div>
            {/* <div className="sideAndInfo2">
                    <InformationInstructor />
                </div> */}
            <div>
                <Reviews />
            </div>
        </>
    )
}

export default ProfileInstructor

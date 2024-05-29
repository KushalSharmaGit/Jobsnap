import Hero from '../Components/hero';
import HomeCards from '../Components/HomeCards';
import JobListings from '../Components/JobListings';
import ViewAllJobs from '../Components/ViewAllJobs';
function HomePage(){
    return(
        <>
        <Hero />
        <HomeCards />
        <JobListings isHome={true} />
        <ViewAllJobs />
        </>
    );
};
export default HomePage;
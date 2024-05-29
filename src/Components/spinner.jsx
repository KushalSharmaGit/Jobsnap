import { ClipLoader } from "react-spinners";
function Spinner(){
    const override = {
        display: "flex",
        margin: "100px auto",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "rgb(67 56 202)",
      };
      
    return(
        <ClipLoader
        color={'white'}
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
};
export default Spinner;
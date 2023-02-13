import { Circle } from "better-react-spinkit";

function Loading() {
    return (
        <center style={{display: "grid", placeItems: "center", height: "100vh"}}>
            <div>
                {/* <img 
                    src = "https://store-images.s-microsoft.com/image/apps.8985.13518859748920827.9387ee94-7c1a-4504-96ce-e69efd39b244.4fa73e25-b054-413a-9da2-26e4f2f91990"
                    alt=""
                    style={{marginBottom: 10, height: 150, width: 150, borderRadius: 100}}
                />   */}
                <Circle color="#25D366" size={80} />
            </div>
        </center>
    )
}

export default Loading

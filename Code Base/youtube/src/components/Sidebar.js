import { useSelector } from "react-redux";

const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    if(!isMenuOpen) {
        return null;
    }

    return (
        <div className="col-span-1 p-2 shadow-lg">
            <ul className="m-2">
                <li>Home</li>
                <li>Video</li>
                <li>Subscription</li>
                <li>Live Feeds</li>
            </ul>
            <ul className="m-2">
                <li className="font-bold">Subscription</li>
                <li>Video</li>
                <li>Subscription</li>
                <li>Live Feeds</li>
            </ul>
            <ul className="m-2">
                <li className="font-bold">Home</li>
                <li>Video</li>
                <li>Subscription</li>
                <li>Live Feeds</li>
            </ul>
        </div>
    )
};

export default Sidebar;
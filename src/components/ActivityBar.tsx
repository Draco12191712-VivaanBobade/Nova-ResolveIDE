import homeIcon from "../assets/activity-bar/house.svg";
import folderIcon from "../assets/activity-bar/folder.svg";
import searchIcon from "../assets/activity-bar/search.svg";
import docsIcon from "../assets/activity-bar/book-open.svg";
import extensionIcon from "../assets/activity-bar/puzzle.svg";
import settingsIcon from "../assets/activity-bar/settings.svg";

export default function ActivityBar() {
    return (
        <div className="activityBar">

            <img src={homeIcon} />
            <img src={folderIcon} />
            <img src={searchIcon} />
            <img src={docsIcon} />
            <img src={extensionIcon} />
            <img src={settingsIcon} />

        </div>
    );
}
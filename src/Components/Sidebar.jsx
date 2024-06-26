import Trending from "../assets/icons/newRelease.svg"
import NewReleases from '../assets/icons/newRelease.svg'
import ComingSoon from '../assets/icons/commingSoon.svg'
import Favorites from '../assets/icons/favourite.svg'
import WatchLater from '../assets/icons/watchLater.svg'
 
const Sidebar = () => {
  return (
    <aside>
				<ul className="space-y-2">
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black" href="#">
							<img src={Trending} width="24" height="24" alt="Trending" />
							<span>Trending</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<img src={NewReleases} width="24" height="24" alt="New Releases" />
							<span>New Releases</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<img src={ComingSoon} width="24" height="24" alt="Coming Soon" />
							<span>Coming Soon</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<img src={Favorites} width="24" height="24" alt="Favorites" />
							<span>Favorites</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<img src={WatchLater} width="24" height="24" alt="Watch Later" />
							<span>Watch Later</span>
						</a>
					</li>
				</ul>
			</aside>
  );
};

export default Sidebar;
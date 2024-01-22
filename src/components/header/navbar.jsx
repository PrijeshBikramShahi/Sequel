import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div>
      <div className="navbar flex items-center justify-between bg-purple-600 h-28 pl-5 pr-5">
        <div className="leftDiv">
          <div className="brandName text-5xl">Sequel</div>
        </div>
        <div className="rightDiv">
          <ul className="itemsList flex gap-5 text-xl">
            <motion.div whileHover={{ scale: 1.2 }}>
              <li className="">About Us</li>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <li className="">About Us</li>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <li className="">About Us</li>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <li className="">About Us</li>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <li className="">Contact Us</li>
            </motion.div>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;

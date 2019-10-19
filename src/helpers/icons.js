import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faPenSquare,
  faPhone,
  faEnvelope,
  faMapMarkedAlt
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
  library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faPenSquare,
    faPhone,
    faEnvelope,
    faMapMarkedAlt
  );
};

export default Icons;

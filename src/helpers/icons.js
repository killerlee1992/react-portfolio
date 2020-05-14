
import {
    faTrash,
    faSignOutAlt,
    faImage,
    faEdit,
    faMinusCircle,
    faSpinner,
    faPlusCircle,
    faPhone,
    faEnvelope,
    faMapMarkedAlt,
    faUnlock,
  } from "@fortawesome/free-solid-svg-icons";
  import { library } from "@fortawesome/fontawesome-svg-core";
  
  const Icons = () => {
    return library.add( faTrash,
        faSignOutAlt,
        faImage,
        faEdit,
        faMinusCircle,
        faSpinner,
        faPlusCircle,
        faPhone,
        faEnvelope,
        faMapMarkedAlt,
        faUnlock,
        );
  };
  
  export default Icons;



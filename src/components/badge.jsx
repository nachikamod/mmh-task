import highlyBooked from "../assets/svgs/highly_booked.svg";
import mmhProMember from "../assets/svgs/mmh_pro.svg";
import mmhVerified from "../assets/svgs/mmh_verified.svg";
import viewsThisMonth from "../assets/svgs/views_this_month.svg";

function Badge({type}) {
    let ico;
    
    switch(type) {
        case "MMH_VERIFIED":
            ico = mmhVerified;
            break;
        case "HIGHLY_BOOKED":
            ico = highlyBooked;
            break;
        case "VIEWS_THIS_MONTH":
            ico = viewsThisMonth;
            break;
        case "MMH_PRO_MEMBER":
            ico = mmhProMember;
            break;
        default:
            ico = mmhVerified;
            break;
    };
    
    return <img src={ico} alt={type} height={20}/>;
}

export default Badge;

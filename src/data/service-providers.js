import profileImage from "../assets/images/profile.png";
import sample_1 from "../assets/images/sample_1.jpg";
import sample_2 from "../assets/images/sample_2.jpg";
import sample_3 from "../assets/images/sample_3.jpg";
import sample_4 from "../assets/images/sample_4.jpg";

/**
 * An array of service providers data
 * @typedef {Object} ServiceProvider
 * @property {number} id - The unique identifier for the service provider.
 * @property {string} profile_image - The path to the profile image of the service provider.
 * @property {string} title - The name of the service provider.
 * @property {string[]} badges - An array of badges representing special features of the service provider.
 * @property {string} info - Information about the service provider.
 * @property {string[]} preview_images - An array of paths to preview images of the service provider's work.
 * @property {string} state - The state of the service provider.
 * @property {string} city - The city of the service provider.
 * @property {string[]} tags - An array of tags describing the services offered by the service provider.
 * @property {Object} contact - Contact information for the service provider.
 * @property {string} contact.email - The email address of the service provider.
 * @property {string[]} contact.phone - An array of phone numbers for the service provider.
 */

/**
 * @type {ServiceProvider[]}
*/
const serviceProviders = [
    {
        id: 1,
        profile_image: profileImage,
        title: "MATHURA DESIGNS",
        badges: [
            "MMH_VERIFIED",
            "HIGHLY_BOOKED",
            "VIEWS_THIS_MONTH"
        ],
        info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
        preview_images: [
            sample_1,
            sample_2,
            sample_3,
            sample_4
        ],
        state: "Punjab",
        city: "Jalandhar",
        tags: ["MEP Consultant", "Architecture", "Architectural Photography"],
        contact: {
            email: "example@mathuradesigns.com",
            phone: [
                "+910000000000",
                "+910000000001"
            ]
        }
    },
    {
        id: 2,
        profile_image: profileImage,
        title: "AJMER ARCHITECTS",
        badges: [
            "MMH_PRO_MEMBER",
            "HIGHLY_BOOKED",
            "VIEWS_THIS_MONTH",
        ],
        info:
            "Ajmer Architects is a top-notch architectural design firm located in the heart of Rajasthan.",
        preview_images: [sample_1, sample_2, sample_3, sample_4],
        state: "Rajasthan",
        city: "Ajmer",
        tags: ["Architecture", "Interior Design", "Construction"],
        contact: {
            email: "info@ajmerarchitects.com",
            phone: ["+910000000000", "+910000000001"]
        }
    },
    {
        id: 3,
        profile_image: profileImage,
        title: "BENGALURU BUILDERS",
        badges: [],
        info:
            "Bengaluru Builders is a leading construction company with years of experience in the industry.",
        preview_images: [sample_1, sample_2, sample_3, sample_4],
        state: "Karnataka",
        city: "Bengaluru",
        tags: ["Construction", "Building Contractor", "Civil Engineering"],
        contact: {
            email: "info@bengalurubuilders.com",
            phone: ["+910000000000", "+910000000001"]
        }
    },
    {
        id: 4,
        profile_image: profileImage,
        title: "DELHI INTERIORS",
        badges: [],
        info: "Delhi Interiors is a team of experienced interior designers and architects. Our mission is to bring your vision to life and create a space that is both beautiful and functional.",
        preview_images: [
            sample_1,
            sample_2,
            sample_3,
            sample_4
        ],
        state: "Delhi",
        city: "New Delhi",
        tags: ["Interior Design", "Architecture", "Home Staging"],
        contact: {
            email: "delhiinteriors@gmail.com",
            phone: [
                "+911234567894",
                "+911234567895"
            ]
        }
    },
    {
        id: 5,
        profile_image: profileImage,
        title: "BANGALORE ARCHITECTS",
        badges: [
            "MMH_VERIFIED",
            "HIGHLY_BOOKED",
            "VIEWS_THIS_MONTH"
        ],
        info: "Bangalore Architects is a full-service architecture firm that provides innovative design solutions to our clients. We are dedicated to creating sustainable and livable spaces.",
        preview_images: [
            sample_1,
            sample_2,
            sample_3,
            sample_4
        ],
        state: "Karnatak",
        city: "Bangalore",
        tags: ["Architecture", "Sustainable Design", "Building Design"],
        contact: {
            email: "bangalorearchitects@gmail.com",
            phone: [
                "+911234567896",
                "+911234567897"
            ]
        }
    },
    {
        id: 6,
        profile_image: profileImage,
        title: "AHMEDABAD DESIGNERS",
        badges: [
            "MMH_PRO_MEMBER",
            "MMH_VERIFIED",
            "VIEWS_THIS_MONTH"
        ],
        info: "Ahmedabad Designers is a team of creative interior designers and architects. We specialize in creating unique spaces that reflect the individual style and personality of our clients.",
        preview_images: [
            sample_1,
            sample_2,
            sample_3
        ],
        state: "Gujarat",
        city: "Ahmedabad",
        tags: ["Interior Design", "Architecture", "Space Planning"],
        contact: {
            email: "ahmedabaddesigners@gmail.com",
            phone: [
                "+911234567898",
                "+911234567899"
            ]
        }
    },
    {
        id: 7, 
        profile_image: profileImage, 
        title: "The Palace Group", 
        badges: [],
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue odio ut ex iaculis convallis.",
        preview_images: [
            sample_1,
            sample_2,
            sample_3,
            sample_4
        ],
        state: "Karnataka",
        city: "Bangalore",
        tags: ["Interior Design", "Furniture Design", "Home Decor"],
        contact: {
            email: "thepalacegroup@gmail.com",
            phone: [
                "+910000000070",
                "+910000000071"
            ]
        }
    },
    {
        id: 8,
        profile_image: profileImage,
        title: "EcoSpace Solutions",
        badges: [
            "MMH_VERIFIED",
            "HIGHLY_BOOKED",
            "VIEWS_THIS_MONTH"
        ],
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue odio ut ex iaculis convallis.",
        preview_images: [
            sample_1,
            sample_2,
            sample_3,
            sample_4
        ],
        state: "Tamil Nadu",
        city: "Chennai",
        tags: ["Landscape Design", "Sustainable Architecture", "Green Building"],
        contact: {
            email: "ecospacesolutions@gmail.com",
            phone: [
                "+910000000080",
                "+910000000081"
            ]
        }
    },
    {
        id: 9,
        profile_image: profileImage,
        title: "Vastu Shilp Consultants",
        badges: [
            "MMH_PRO_MEMBER",
            "MMH_VERIFIED",
            "HIGHLY_BOOKED",
        ],
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue odio ut ex iaculis convallis.",
        preview_images: [
            sample_1,
            sample_2,
            sample_3,
            sample_4
        ],
        state: "Uttar Pradesh",
        city: "Lucknow",
        tags: ["Vastu Shastra", "Feng Shui", "Space Clearing"],
        contact: {
            email: "vastushilpconsultants@gmail.com",
            phone: [
                "+910000000090",
                "+910000000091"
            ]
        }
    },
    {
        id: 10,
        profile_image: profileImage,
        title: "BENGAL HOMES",
        badges: [
            "MMH_PRO_MEMBER",
            "MMH_VERIFIED",
            "VIEWS_THIS_MONTH",
        ],
        info: "At Bengal Homes, we strive to provide the best housing solutions for families in India. With our team of experienced architects and contractors, we ensure that every project is delivered on time and within budget.",
        preview_images: [
            sample_1,
            sample_2,
            sample_3,
            sample_4
        ],
        state: "West Bengal",
        city: "Kolkata",
        tags: ["Home Builder", "Housing Solutions", "Architecture"],
        contact: {
            email: "info@bengalhomes.com",
            phone: [
                "+91900000000",
                "+91900000001"
            ]
        }
    }
];

export default serviceProviders;
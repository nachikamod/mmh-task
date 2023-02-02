import Badge from "../components/badge";
import serviceProviders from "../data/service-providers";
import { FaTags } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillShareFill, BsHeart } from "react-icons/bs";
import { HiFilter } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import { Select, Option, Checkbox, Input } from "@material-tailwind/react";
import { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";



function Root() {

    const [displayFilter, setDisplay] = useState(false);
    // const [feesRange, setFees] = useState(30);

    const [minValue, set_minValue] = useState(25);
    const [maxValue, set_maxValue] = useState(75);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };



    return (
        <>
            <div className="sticky top-0 z-50">
                <div className="p-5 flex justify-center items-center" style={{ background: "linear-gradient(90deg, rgba(243,188,18,1) 0%, rgba(185,134,16,1) 49%, rgba(234,141,1,1) 100%)" }}>
                    <form className="flex flex-col md:flex-row w-fit gap-5">
                        <Select className="custom-select" color="purple" variant="static" label="Services at">
                            <Option>Delhi</Option>
                            <Option>Punjab</Option>
                            <Option>Rajasthan</Option>
                            <Option>Karnataka</Option>
                            <Option>Tamil Nadu</Option>
                            <Option>Uttar Pradesh</Option>
                            <Option>West Bengal</Option>
                            <Option>Gujarat</Option>
                        </Select>
                        <Select className="custom-select" color="purple" variant="static" label="Specialist">
                            <Option>Architects</Option>
                            <Option>Builders</Option>
                            <Option>Consultants</Option>
                        </Select>
                        <button className="bg-black text-white w-80 px-2 rounded hover:bg-white hover:text-black ease-in duration-300">Search Again</button>
                    </form>
                </div>
                <div onClick={() => !displayFilter && setDisplay(true)} className="custom-filters-wrapper shadow-md bg-white p-2 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-[100px] cursor-pointer relative">
                    {
                        !displayFilter ? <>
                            <button className="flex flex-col items-center justify-center font-semibold">
                                <HiFilter />
                                Filters
                            </button>
                            <p className="flex flex-row items-center gap-2">Price <MdKeyboardArrowDown /></p>
                            <p className="flex flex-row items-center gap-2">Show Only <MdKeyboardArrowDown /></p>
                            <p className="flex flex-row items-center gap-2">Office At <MdKeyboardArrowDown /></p>
                        </> : <div className="w-full flex justify-center items-center shadow-md p-2">
                            <div className="md:w-1/2 flex flex-row justify-end gap-3">
                                <button onClick={() => setDisplay(false)} className="border-solid rounded-md border-[1.5px] border-black py-1 px-5 font-semibold hover:bg-[#fcba01] ease-in duration-300">Cancel</button>
                                <button onClick={() => setDisplay(false)} className="rounded-md py-1 px-5 font-semibold bg-[#fcba01] hover:bg-[#000000] hover:text-white ease-in duration-300">Apply Filters</button>
                            </div>
                        </div>
                    }

                    {
                        displayFilter &&
                        <div className="custom-filters inset-x-0 top-full bg-black/50 absolute h-screen z-40">

                            <div className="bg-white p-4">
                                <div className="md:w-1/2 flex flex-col md:flex-row gap-10 md:gap-[200px] m-auto">
                                    <div>
                                        <p className="text-blck font-semibold">Fees Range:</p>
                                        <MultiRangeSlider
                                            baseClassName="custom-slider"
                                            labels={[`₹${minValue}`, `₹${maxValue}`]}
                                            barInnerColor="#EFBE33"
                                            barLeftColor="#EFBE33"
                                            barRightColor="#EFBE33"
                                            thumbLeftColor="#EFBE33"
                                            thumbRightColor="#EFBE33"
                                            className="w-52"
                                            ruler={false}
                                            label={true}
                                            min={10000}
                                            max={2000000}
                                            step={1}
                                            minValue={minValue}
                                            maxValue={maxValue}
                                            onInput={(e) => {
                                                handleInput(e);
                                            }}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-blck font-semibold">Show Only:</p>
                                        <Checkbox label="Verified Members"/>
                                        <Checkbox label="All"/>
                                    </div>
                                    <div>
                                        <p className="text-blck font-semibold">Office at:</p>
                                        <Input variant="standard" label="Search Location" icon={<GoSearch />}/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    }
                </div>
            </div>
            <div className="p-5">
                {
                    serviceProviders.map(provider =>
                        <div key={`${provider.id}_card`} className="mb-4 shadow-lg border border-[#A9A9A9] border-solid rounded-2xl">
                            <div className="p-6 flex flex-col md:flex-row justify-between gap-5 items-center shadow-lg border border-[#A9A9A9] border-solid rounded-2xl">
                                <div className="flex flex-col md:flex-row items-center gap-5">
                                    <img src={provider.profile_image} alt={provider.title} height={140} width={140} />
                                    <div className="flex flex-col gap-5 md:gap-3">
                                        <div className="flex flex-col md:flex-row items-center gap-3 h-fit">
                                            <h1 className="font-semibold text-2xl">{provider.title}</h1>
                                            {
                                                provider.badges.map((badge, index) =>
                                                    <Badge key={`${provider.id}_${index}_badge`} type={badge} />
                                                )
                                            }
                                        </div>
                                        <p className="max-w-sm text-[13px] text-slate-600 text-center md:text-start">{provider.info}</p>
                                        <div className="flex flex-col md:flex-row items-center gap-1" >
                                            <FaTags className="text-slate-500 scale-x-[-1] m-0 mr-2 p-0" />
                                            {
                                                provider.tags.map((tag, index) =>
                                                    <>
                                                        <p className="m-0 p-0 text-xs md:text-sm font-semibold" key={`${provider.id}_${index}_tag`}>{tag}</p>
                                                        {
                                                            (provider.tags.length - 1 > index) && <RxDividerVertical className="hidden md:block" />
                                                        }
                                                    </>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 60px)", gridTemplateRows: "repeat(2, 60px)", gridColumnGap: "5px", gridRowGap: "5px" }}>
                                    <div className="cursor-pointer" style={{ gridArea: "1 / 1 / 2 / 2", background: `url(${provider.preview_images[0]})`, backgroundRepeat: "no-repeat", backgroundSize: "150%", backgroundPosition: "center" }}></div>
                                    <div className="cursor-pointer" style={{ gridArea: "1 / 2 / 2 / 3", background: `url(${provider.preview_images[1]})`, backgroundRepeat: "no-repeat", backgroundSize: "150%", backgroundPosition: "center" }}></div>
                                    <div className="cursor-pointer" style={{ gridArea: "2 / 1 / 3 / 2", background: `url(${provider.preview_images[2]})`, backgroundRepeat: "no-repeat", backgroundSize: "150%", backgroundPosition: "center" }}></div>
                                    <div className="flex items-center justify-center cursor-pointer" style={{ gridArea: "2 / 2 / 3 / 3", background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${provider.preview_images[3]})`, backgroundRepeat: "no-repeat", backgroundSize: "180%", backgroundPosition: "center" }}>
                                        <p className="text-white text-lg">5+</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-5 flex flex-col md:flex-row justify-between items-center gap-5">
                                <div className="flex flex-row justify-center items-center gap-2">
                                    <IoLocationSharp size={25} />
                                    <p className="p-0 m-0">{provider.city}</p>
                                    <RxDividerVertical />
                                    <p className="p-0 m-0">{provider.state}</p>
                                </div>
                                <div className="flex flex-row justify-center items-center gap-5">
                                    <Link to={"#"}>
                                        <BsFillShareFill />
                                    </Link>
                                    <Link to={"#"}>
                                        <BsHeart />
                                    </Link>
                                    <button className="border-solid rounded-md border-[1.5px] border-black py-1 px-5 font-semibold hover:bg-[#fcba01] ease-in duration-300">CONTACT</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default Root;

import React, { useState } from "react";
import "./header.css"
import { DateRange } from "react-date-range"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { format } from "date-fns";
export default function Header() {
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adults: 1,
        children: 2,
        room: 1
    })
    return <div className="header">
        <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attraction</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport taxis</span>
                </div>
            </div>
            <h1 className="headerTitle">Ready To GO</h1>
            <p className="headerDesc">
                Hello to the future
            </p>
            <button className="headerBtn">Sign in/ Register</button>
            <div className="headerSearch">

                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon" />
                    <input type="text" placeholder="where are you going?"
                        className="headerSearchInput" />
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                    <span
                        onClick={() => setOpenDate(!openDate)}
                        className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")}`} to {`${format(date[0].endDate, "MM/dd/yyyy")}`}</span>

                    {
                        openDate &&
                        <DateRange
                            editableDateInputs={true}
                            onChange={(item) => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                            minDate={new Date()}
                        />
                    }
                </div>

                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                    <span className="headerSearchText">{`${options.adults} adults ${options.children} children ${options.room} room`}</span>
                    <div className="options">
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <div className="optionCounter">
                                <button className="optionCounterButton">-</button>
                                <span className="optionCounterNumber">1</span>
                                <button className="optionCounterButton">+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Children</span>
                            <div className="optionCounter">
                                <button className="optionCounterButton">-</button>
                                <span className="optionCounterNumber">1</span>
                                <button className="optionCounterButton">+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Room</span>
                            <div className="optionCounter">
                                <button className="optionCounterButton">-</button>
                                <span className="optionCounterNumber">1</span>
                                <button className="optionCounterButton">+</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                    <button className="headerBtn">Search</button>
                </div>

            </div>


        </div>
    </div >;
}

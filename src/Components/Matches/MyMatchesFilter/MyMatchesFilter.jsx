import React from 'react'
import "./MyMatchesFilter.css"
import {
    UncontrolledAccordion,
    AccordionItem,
    AccordionHeader,
    AccordionBody
} from "reactstrap"

const MyMatchesFilter = () => {
    return (
        <div className="my_matches_filter_wrapper py-0 mx-1">
            <div className="my_matches_filter_box">
                <UncontrolledAccordion
                    defaultOpen={[
                        '1',
                        '2',
                        '3',
                        '4',
                        '5'
                    ]}
                    stayOpen
                >
                    <AccordionItem className='py-1 px-3' style={{ backgroundColor: 'var(--lighter-border)' }}>
                        <p className='mb-0' style={{ fontWeight: 700, lineHeight: "0.8rem" }}>Filter Matches</p>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="1">
                            Refine 1
                        </AccordionHeader>
                        <AccordionBody accordionId="1">
                            <input type="radio" name="fav_language_1" value="HTML" />
                            <label for="html" className='ms-1'>Option -1</label><br />
                            <input type="radio" name="fav_language_1" value="CSS" />
                            <label for="css" className='ms-1'>Option -2</label><br />
                            <input type="radio" name="fav_language_1" value="JavaScript" />
                            <label for="javascript" className='ms-1'>Option -3</label>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="2">
                            Refine 2
                        </AccordionHeader>
                        <AccordionBody accordionId="2">
                            <input type="radio" name="fav_language_2" value="HTML" />
                            <label for="html" className='ms-1'>Option -1</label><br />
                            <input type="radio" name="fav_language_2" value="CSS" />
                            <label for="css" className='ms-1'>Option -2</label><br />
                            <input type="radio" name="fav_language_2" value="JavaScript" />
                            <label for="javascript" className='ms-1'>Option -3</label>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="3">
                            Refine 3
                        </AccordionHeader>
                        <AccordionBody accordionId="3">
                            <input type="radio" name="fav_language_3" value="HTML" />
                            <label for="html" className='ms-1'>Option -1</label><br />
                            <input type="radio" name="fav_language_3" value="CSS" />
                            <label for="css" className='ms-1'>Option -2</label><br />
                            <input type="radio" name="fav_language_3" value="JavaScript" />
                            <label for="javascript" className='ms-1'>Option -3</label>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="4">
                            Refine 4
                        </AccordionHeader>
                        <AccordionBody accordionId="4">
                            <input type="radio" name="fav_language_4" value="HTML" />
                            <label for="html" className='ms-1'>Option -1</label><br />
                            <input type="radio" name="fav_language_4" value="CSS" />
                            <label for="css" className='ms-1'>Option -2</label><br />
                            <input type="radio" name="fav_language_4" value="JavaScript" />
                            <label for="javascript" className='ms-1'>Option -3</label>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="5">
                            Refine 5
                        </AccordionHeader>
                        <AccordionBody accordionId="5">
                            <input type="radio" name="fav_language_5" value="HTML" />
                            <label for="html" className='ms-1'>Option -1</label><br />
                            <input type="radio" name="fav_language_5" value="CSS" />
                            <label for="css" className='ms-1'>Option -2</label><br />
                            <input type="radio" name="fav_language_5" value="JavaScript" />
                            <label for="javascript" className='ms-1'>Option -3</label>
                        </AccordionBody>
                    </AccordionItem>
                </UncontrolledAccordion>
            </div>
        </div>
    )
}

export default MyMatchesFilter
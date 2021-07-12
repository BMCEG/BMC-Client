import React from 'react';
import ReactPlayer from 'react-player';
import endpoint from '../../helpers/api_service';
import './toolbox.css';

export default function toolbox() {
    return (
        <div>
            <div className='toolbox-text'>
                <h2 className='bukra-bold lspacing'>Feasibility Study</h2>
                <div className='toolbox-subtitle bukra-bold'>
                    <h3>What is a Feasibility Study?!</h3>
                </div>
                <div className='toolbox-subtitle-body bukra-regular lspacing'>

                    <h5>Feasibility study is an assessment tool to assess the viability of a new proposed project or a plan.</h5>
                    <h5>You do it before spending money or time or effort.</h5>
                    <h5>It is to find the answers of many questions: </h5>
                    <h5>·     Is this project or plan doable?</h5>
                    <h5>·     How can I start?</h5>
                    <h5>·     What are the required resources and technologies?</h5>
                    <h5>·     Is it profitable? Is there a demand? How much risk do you encounter?</h5>
                </div>
                {/* </div> */}
                {/* <ReactPlayer className='toolbox-video' url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}
                {/* <img className='toolbox-img' src='https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081' alt='whyBMC' /> */}
            </div>
            <div className='toolbox-text'>
                <div className='toolbox-subtitle bukra-bold'>
                    <h3>What is a Feasibility Study?!</h3>
                </div>
                <div className='toolbox-subtitle-body bukra-regular'>
                    <h5>The proposed project or plan initially started with an Idea, after Idea validation, through conducting an initial informal investigation and assessment, you may conduct a formal assessment like a prefeasibility study to investigate various aspects of the proposed project or plan, this may eliminate scenarios/models or identifying new ones.</h5>
                    <h5>By doing this you now are able to conduct the comprehensive feasibility study to your refined proposed project or plan for a comprehensive and detailed study covering all business areas.</h5>
                </div>
                <br></br>
                <div className='toolbox-subtitle bukra-bold'>
                    <h3>Why do you need to conduct a feasibility study? </h3>
                </div>
                <div className='toolbox-subtitle-body bukra-regular'>
                    <h5>·     To save money, time and effort before wasting them on not sure project/plan </h5>
                    <h5>·     Provide a clear and whole view of the proposed project / plan</h5>
                    <h5>·     Enhance the success rate of the proposed project / plan</h5>
                    <h5>·     Provide quality information and answers needed for the decision-making process. </h5>
                    <h5>·     Narrow business alternatives and seize the options gap.</h5>
                    <h5>·     You may need to attract equity investments or funding from banks.</h5>
                </div>
                <br></br>
                {/* <br></br> */}
                {/* <div className='toolbox-body-inline'> */}
                {/* <img className='toolbox-img' src='https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081' alt='whyBMC' /> */}
                <div>
                    <div className='toolbox-text bukra-regular'>
                        <h5>·     You should have a clearly defined outline of one or more alternative business models or scenarios that you want to explore its feasibility.</h5>
                        <h5>·     Sure, you don’t want to spend your feasibility money investigating ideas that you can determine are not feasible by just making a few phone calls.</h5>
                        <h5>·     Do not start with a previously taken decision, Feasibility is not to hear what you want to hear, you need an accurate assessment of the feasibility of the proposed project / plan based on primary data received from surveys and research studies.</h5>
                        <h5>·     Comprehensive and accurate Feasibility study is not cheap, Time and money spent in choosing and hiring a good consultant is an important investment that will return on later.</h5>
                        <h5>·     Never blindly follow feasibility templates, please investigate and hire consultants who are familiar with your type of business and experienced in preparing feasibility studies.</h5>
                        <h5>·     Following any business principles doesn’t guarantee business success, however it increases the chances of success. The basic premise of a feasibility study is to determine the potential for success, or viability, of a proposed project / plan.</h5>
                        <h5>·     The feasibility study is a critical step in the business assessment process. If properly conducted, it may be the best investment you ever made.</h5>
                        <br></br>
                    </div>
                    <div className='toolbox-subtitle bukra-bold'>
                        <h3>Typical Feasibility study outline </h3>
                    </div>
                    <div className='toolbox-subtitle-body bukra-regular'>
                        <h5>BMC offers a wide range of studies and analysis such as, Market studies, technical studies, financial & economical analysis and sensitivity analysis are the typical factors to cover in building a feasibility study for your business. Moreover, a well-done comprehensive feasibility study is based on the careful identification and assessment of all of the issues important to your specific project or idea.</h5>
                        <h5> However, this may not be a complete listing of the factors that should be considered in your specific situation.</h5>
                    </div>
                </div>
                {/* </div> */}
            </div>

        </div>)
}
